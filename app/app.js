const form = document.getElementById('render-form');
const jobsEl = document.getElementById('jobs');
const statusEl = document.getElementById('form-status');
const templateSelect = document.getElementById('template-select');
const refreshButton = document.getElementById('refresh-jobs');

const uploadFile = async (kind, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`/api/uploads/${kind}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload ${kind}`);
  }

  return response.json();
};

const loadTemplates = async () => {
  const response = await fetch('/api/templates');
  const data = await response.json();
  templateSelect.innerHTML = data.templates
    .map((template) => `<option value="${template.id}">${template.label}</option>`)
    .join('');
};

const renderJobCard = (job) => {
  const actions = [];
  if (job.status === 'completed') {
    actions.push(`<a href="/api/render-jobs/${job.id}/output">Download MP4</a>`);
    actions.push(`<button data-reveal="${job.id}" type="button">Reveal in folder</button>`);
  }

  return `
    <article class="job-card">
      <div class="job-top">
        <strong>${job.templateId}</strong>
        <span class="badge badge-${job.status}">${job.status}</span>
      </div>
      <div class="job-body">
        <div><span>Job ID:</span> ${job.id}</div>
        <div><span>Output:</span> ${job.outputFileName}</div>
        <div><span>Created:</span> ${new Date(job.createdAt).toLocaleString()}</div>
        ${job.error ? `<div class="error">${job.error}</div>` : ''}
      </div>
      <div class="job-actions">${actions.join(' ')}</div>
    </article>
  `;
};

const loadJobs = async () => {
  const response = await fetch('/api/render-jobs');
  const data = await response.json();
  jobsEl.innerHTML = data.jobs.length
    ? data.jobs.map(renderJobCard).join('')
    : '<p class="muted">No jobs yet.</p>';
};

jobsEl.addEventListener('click', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const jobId = target.dataset.reveal;
  if (!jobId) return;
  await fetch(`/api/render-jobs/${jobId}/reveal`, { method: 'POST' });
});

refreshButton.addEventListener('click', () => {
  void loadJobs();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusEl.textContent = 'Uploading files and creating render job...';

  try {
    const formData = new FormData(form);
    const audioFile = document.getElementById('audio-file').files[0];
    const scriptFile = document.getElementById('script-file').files[0];
    const logoFile = document.getElementById('logo-file').files[0];

    const [audioUpload, scriptUpload, logoUpload] = await Promise.all([
      uploadFile('audio', audioFile),
      uploadFile('script', scriptFile),
      logoFile ? uploadFile('logo', logoFile) : Promise.resolve({ publicPath: 'brand/logo.jpg' }),
    ]);

    const payload = {
      topic: formData.get('topic'),
      templateId: formData.get('templateId'),
      outputFileName: String(formData.get('topic') || 'render-job').replace(/\s+/g, '-').toLowerCase(),
      brandName: formData.get('brandName'),
      introSubtitle: formData.get('introSubtitle'),
      outroSubtitle: formData.get('outroSubtitle'),
      audioPath: audioUpload.publicPath,
      scriptPath: scriptUpload.publicPath,
      logoPath: logoUpload.publicPath,
      themePreset: formData.get('themePreset'),
    };

    const response = await fetch('/api/render-jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create render job');
    }

    statusEl.textContent = 'Render job created. Rendering started in background.';
    form.reset();
    await loadJobs();
  } catch (error) {
    statusEl.textContent = error instanceof Error ? error.message : String(error);
  }
});

void loadTemplates();
void loadJobs();
setInterval(() => {
  void loadJobs();
}, 5000);
