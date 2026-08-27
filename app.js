// CS Executive Study Tracker - Core Application Logic
// Note: Strictly no em dashes in code or comments.

const AUTH_KEY = "tajkichai";
const STORAGE_KEY = "cs_exec_study_state_v2";
const AUTH_STORAGE_KEY = "cs_exec_auth_session";

// Default Application State
let appState = {
  completed: {},
  revisions: {},
  bookmarks: {},
  notes: {},
  examTargetDate: "2026-12-21",
  pomoCompletedCount: 0
};

// UI Filter State
let currentGroupFilter = "all";
let currentStatusFilter = "all";
let currentSearchQuery = "";
let allCollapsed = false;

// Pomodoro Timer State
let pomoTimerInterval = null;
let pomoTotalSeconds = 25 * 60;
let pomoRemainingSeconds = 25 * 60;
let pomoIsRunning = false;
let pomoCurrentMode = "Focus Session";

// Motivational Quotes for CS Aspirants
const MOTIVATIONAL_QUOTES = [
  '"Success in CS Executive is the sum of small chapter-by-chapter efforts, repeated day in and day out."',
  '"Company Secretaries are the conscience keepers of corporate governance. Master your laws today!"',
  '"Consistency is key. One section, one case law, one rule at a time."',
  '"Focus on concepts and bare act understanding. High marks naturally follow clarity."',
  '"Every completed chapter brings you one step closer to adding CS before your name!"',
  '"Discipline is choosing between what you want now and what you want most."',
  '"Your future board room awaits your legal wisdom. Keep studying strong!"'
];

/* ==========================================================================
   Initialization
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  checkAuthentication();
  renderSyllabus();
  updateAllMetrics();
  updateCountdown();
  setupRandomQuote();
  
  // Interval for countdown refresh every minute
  setInterval(updateCountdown, 60000);
});

/* ==========================================================================
   Authentication System (Password: tajkichai)
   ========================================================================== */

function checkAuthentication() {
  const isUnlocked = localStorage.getItem(AUTH_STORAGE_KEY) === "unlocked";
  const overlay = document.getElementById("authOverlay");
  const appContainer = document.getElementById("appContainer");

  if (isUnlocked) {
    overlay.classList.add("hidden");
    appContainer.classList.remove("hidden");
  } else {
    overlay.classList.remove("hidden");
    appContainer.classList.add("hidden");
    const pwdInput = document.getElementById("passwordInput");
    if (pwdInput) {
      setTimeout(() => pwdInput.focus(), 200);
    }
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("passwordInput");
  const errorEl = document.getElementById("authError");
  const enteredPassword = input.value.trim();

  if (enteredPassword === AUTH_KEY) {
    localStorage.setItem(AUTH_STORAGE_KEY, "unlocked");
    errorEl.classList.add("hidden");
    input.value = "";
    
    // Smooth transition
    const overlay = document.getElementById("authOverlay");
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.classList.add("hidden");
      overlay.style.opacity = "1";
      document.getElementById("appContainer").classList.remove("hidden");
      triggerConfetti();
    }, 300);
  } else {
    errorEl.classList.remove("hidden");
    input.value = "";
    input.focus();
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById("passwordInput");
  const icon = document.getElementById("pwdIcon");
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
}

function lockWebsite() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  const overlay = document.getElementById("authOverlay");
  const appContainer = document.getElementById("appContainer");
  
  appContainer.classList.add("hidden");
  overlay.classList.remove("hidden");
  overlay.style.opacity = "1";
  
  const pwdInput = document.getElementById("passwordInput");
  if (pwdInput) {
    pwdInput.value = "";
    pwdInput.focus();
  }
}

/* ==========================================================================
   State Management & LocalStorage
   ========================================================================== */

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = {
        completed: parsed.completed || {},
        revisions: parsed.revisions || {},
        bookmarks: parsed.bookmarks || {},
        notes: parsed.notes || {},
        examTargetDate: parsed.examTargetDate || "2026-12-21",
        pomoCompletedCount: parsed.pomoCompletedCount || 0
      };
    }
  } catch (err) {
    console.error("Error loading saved state from storage:", err);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.error("Error saving state to storage:", err);
  }
}

/* ==========================================================================
   Syllabus Rendering Engine
   ========================================================================== */

function renderSyllabus() {
  const container = document.getElementById("syllabusContainer");
  if (!container || !SYLLABUS_DATA || !SYLLABUS_DATA.groups) return;

  container.innerHTML = "";

  SYLLABUS_DATA.groups.forEach((group) => {
    // Check if group is filtered out
    if (currentGroupFilter !== "all" && currentGroupFilter !== group.id) {
      return;
    }

    const groupSection = document.createElement("section");
    groupSection.className = "group-container";
    groupSection.id = `group-section-${group.id}`;

    // Group Banner Header
    const groupHeader = document.createElement("div");
    groupHeader.className = "group-header-banner";
    groupHeader.innerHTML = `
      <div class="group-title-text">
        <h2>${group.name}</h2>
        <p>${group.description}</p>
      </div>
      <div class="group-header-badge">
        <span class="badge-group ${group.id === 'group-1' ? 'g1' : 'g2'}">${group.papers.length} PAPERS</span>
      </div>
    `;
    groupSection.appendChild(groupHeader);

    // Papers Grid
    const papersGrid = document.createElement("div");
    papersGrid.className = "group-papers-grid";

    let visiblePapersCount = 0;

    group.papers.forEach((paper) => {
      const paperCard = createPaperCardElement(paper, group.id);
      if (paperCard) {
        papersGrid.appendChild(paperCard);
        visiblePapersCount++;
      }
    });

    if (visiblePapersCount > 0) {
      groupSection.appendChild(papersGrid);
      container.appendChild(groupSection);
    }
  });

  // Empty state when search or filter matches nothing
  if (container.children.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3 style="color: #ffffff; margin-bottom: 6px;">No Chapters Found</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Try adjusting your search keywords or clearing active status filters.</p>
        <button class="btn-primary btn-sm" onclick="clearAllFilters()">Reset All Filters</button>
      </div>
    `;
  }
}

function createPaperCardElement(paper, groupId) {
  let totalChaptersInPaper = 0;
  let completedChaptersInPaper = 0;
  let matchingChaptersCount = 0;

  // Pre-calculate paper stats and filter check
  paper.parts.forEach((part) => {
    part.chapters.forEach((chapter) => {
      totalChaptersInPaper++;
      if (appState.completed[chapter.id]) {
        completedChaptersInPaper++;
      }
      if (isChapterMatchingFilters(chapter, paper.name, paper.code)) {
        matchingChaptersCount++;
      }
    });
  });

  // If filtering and no chapters match in this paper, omit paper
  if (matchingChaptersCount === 0 && (currentSearchQuery || currentStatusFilter !== "all")) {
    return null;
  }

  const paperPercent = totalChaptersInPaper > 0 
    ? Math.round((completedChaptersInPaper / totalChaptersInPaper) * 100) 
    : 0;

  const isPaperFinished = totalChaptersInPaper > 0 && completedChaptersInPaper === totalChaptersInPaper;

  const card = document.createElement("div");
  card.className = `paper-card ${allCollapsed ? "collapsed" : ""} ${isPaperFinished ? "completed-all" : ""}`;
  card.id = `card-${paper.id}`;

  // Paper Header
  const header = document.createElement("div");
  header.className = "paper-header";
  header.onclick = () => togglePaperCollapse(paper.id);
  header.innerHTML = `
    <div class="paper-title-area">
      <div class="paper-code-badge">${paper.code}</div>
      <div class="paper-name-wrap">
        <h3>${paper.name}</h3>
        <div class="paper-meta-row">
          <span>${paper.marks} Marks</span>
          <span>•</span>
          <span>${paper.duration}</span>
          <span>•</span>
          <span>${paper.pattern}</span>
        </div>
      </div>
    </div>
    <div class="paper-progress-area">
      <div class="paper-progress-text">
        <div class="paper-percent" id="paper-percent-${paper.id}">${paperPercent}%</div>
        <div class="paper-count" id="paper-count-${paper.id}">${completedChaptersInPaper}/${totalChaptersInPaper} Done</div>
      </div>
      <div class="paper-mini-bar">
        <div class="paper-mini-fill" id="paper-fill-${paper.id}" style="width: ${paperPercent}%;"></div>
      </div>
      <div class="paper-chevron">▼</div>
    </div>
  `;
  card.appendChild(header);

  // Paper Body
  const body = document.createElement("div");
  body.className = "paper-body";

  paper.parts.forEach((part, partIdx) => {
    const partSection = document.createElement("div");
    partSection.className = "part-section";

    let partCompleted = 0;
    let visiblePartChapters = 0;

    const chapterList = document.createElement("div");
    chapterList.className = "chapter-list";

    part.chapters.forEach((chapter) => {
      if (appState.completed[chapter.id]) {
        partCompleted++;
      }

      if (isChapterMatchingFilters(chapter, paper.name, paper.code)) {
        visiblePartChapters++;
        const chapterRow = createChapterRowElement(chapter, paper.id);
        chapterList.appendChild(chapterRow);
      }
    });

    if (visiblePartChapters > 0) {
      const partHeader = document.createElement("div");
      partHeader.className = "part-header";
      partHeader.innerHTML = `
        <h4>${part.name}</h4>
        <span class="part-progress-tag" id="part-tag-${paper.id}-${partIdx}">${partCompleted}/${part.chapters.length} Finished</span>
      `;
      partSection.appendChild(partHeader);
      partSection.appendChild(chapterList);
      body.appendChild(partSection);
    }
  });

  card.appendChild(body);
  return card;
}

function createChapterRowElement(chapter, paperId) {
  const isChecked = !!appState.completed[chapter.id];
  const isStarred = !!appState.bookmarks[chapter.id];
  const revs = appState.revisions[chapter.id] || [];
  const existingNote = appState.notes[chapter.id] || "";
  const hasNotes = existingNote.trim().length > 0;

  const item = document.createElement("div");
  item.className = `chapter-item ${isChecked ? "is-completed" : ""}`;
  item.id = `chapter-item-${chapter.id}`;

  const mainRow = document.createElement("div");
  mainRow.className = "chapter-main-row";

  // Left Area: Checkbox & Info
  const left = document.createElement("div");
  left.className = "chapter-left";

  left.innerHTML = `
    <label class="custom-checkbox-wrap" title="Mark chapter as completed">
      <input 
        type="checkbox" 
        id="check-${chapter.id}" 
        ${isChecked ? "checked" : ""} 
        onchange="handleChapterCheck('${chapter.id}', '${paperId}', this.checked)"
      >
      <span class="custom-checkmark"></span>
    </label>
    <div class="chapter-info">
      <div class="chapter-title-line">
        <span class="chapter-num">Ch ${chapter.number}</span>
        <span class="chapter-name">${chapter.title}</span>
        ${chapter.important ? '<span class="badge-imp">High Yield</span>' : ''}
      </div>
      <div class="chapter-subtopics">${chapter.subtopics}</div>
    </div>
  `;

  // Right Area: Action Tools & Revisions
  const actions = document.createElement("div");
  actions.className = "chapter-actions";

  actions.innerHTML = `
    <!-- Revision Tracker Pills -->
    <div class="revision-group" title="Mark revision rounds">
      <button 
        type="button" 
        class="rev-btn ${revs.includes(1) ? "done" : ""}" 
        onclick="toggleRevision('${chapter.id}', 1, this)"
        title="Revision Round 1"
      >R1</button>
      <button 
        type="button" 
        class="rev-btn ${revs.includes(2) ? "done" : ""}" 
        onclick="toggleRevision('${chapter.id}', 2, this)"
        title="Revision Round 2"
      >R2</button>
      <button 
        type="button" 
        class="rev-btn ${revs.includes(3) ? "done" : ""}" 
        onclick="toggleRevision('${chapter.id}', 3, this)"
        title="Revision Round 3"
      >R3</button>
    </div>

    <!-- Notes Toggle Button -->
    <button 
      type="button" 
      class="btn-notes-toggle ${hasNotes ? "has-notes" : ""}" 
      id="btn-note-${chapter.id}"
      onclick="toggleNotesDrawer('${chapter.id}')"
      title="Personal Chapter Notes"
    >📝</button>

    <!-- Star / Bookmark Button -->
    <button 
      type="button" 
      class="btn-star ${isStarred ? "starred" : ""}" 
      id="star-${chapter.id}"
      onclick="toggleBookmark('${chapter.id}', this)"
      title="Bookmark chapter for urgent revision"
    >${isStarred ? "⭐" : "☆"}</button>
  `;

  mainRow.appendChild(left);
  mainRow.appendChild(actions);
  item.appendChild(mainRow);

  // Notes Drawer Container
  const notesDrawer = document.createElement("div");
  notesDrawer.className = "chapter-notes-drawer hidden";
  notesDrawer.id = `notes-drawer-${chapter.id}`;
  notesDrawer.innerHTML = `
    <textarea 
      class="chapter-notes-textarea" 
      id="textarea-${chapter.id}"
      placeholder="Type personal summary notes, section numbers, case laws, or weak concepts to revise..."
      oninput="handleNotesInput('${chapter.id}', this.value)"
    >${escapeHtml(existingNote)}</textarea>
    <div class="notes-status-hint">
      <span>Auto-saved to device</span>
      <button type="button" class="btn-ghost btn-sm" style="padding: 2px 8px; font-size: 0.72rem;" onclick="toggleNotesDrawer('${chapter.id}')">Close Notes</button>
    </div>
  `;
  item.appendChild(notesDrawer);

  return item;
}

/* ==========================================================================
   Interactivity Handlers (Checks, Revisions, Notes, Bookmarks)
   ========================================================================== */

function handleChapterCheck(chapterId, paperId, isChecked) {
  if (isChecked) {
    appState.completed[chapterId] = true;
  } else {
    delete appState.completed[chapterId];
  }

  const row = document.getElementById(`chapter-item-${chapterId}`);
  if (row) {
    if (isChecked) {
      row.classList.add("is-completed");
    } else {
      row.classList.remove("is-completed");
    }
  }

  saveStateToStorage();
  updateAllMetrics();
  updatePaperMetrics(paperId);

  // Trigger celebratory confetti if overall progress reaches milestone
  const currentTotal = getOverallCompletionPercentage();
  if (isChecked && (currentTotal === 25 || currentTotal === 50 || currentTotal === 75 || currentTotal === 100)) {
    triggerConfetti();
  }
}

function toggleRevision(chapterId, roundNum, buttonEl) {
  if (!appState.revisions[chapterId]) {
    appState.revisions[chapterId] = [];
  }

  const index = appState.revisions[chapterId].indexOf(roundNum);
  if (index > -1) {
    appState.revisions[chapterId].splice(index, 1);
    buttonEl.classList.remove("done");
  } else {
    appState.revisions[chapterId].push(roundNum);
    buttonEl.classList.add("done");
  }

  saveStateToStorage();
  updateAllMetrics();
}

function toggleBookmark(chapterId, buttonEl) {
  if (appState.bookmarks[chapterId]) {
    delete appState.bookmarks[chapterId];
    buttonEl.classList.remove("starred");
    buttonEl.textContent = "☆";
  } else {
    appState.bookmarks[chapterId] = true;
    buttonEl.classList.add("starred");
    buttonEl.textContent = "⭐";
  }
  saveStateToStorage();
}

function toggleNotesDrawer(chapterId) {
  const drawer = document.getElementById(`notes-drawer-${chapterId}`);
  if (!drawer) return;

  const isCurrentlyHidden = drawer.classList.contains("hidden");
  if (isCurrentlyHidden) {
    drawer.classList.remove("hidden");
    const textarea = document.getElementById(`textarea-${chapterId}`);
    if (textarea) textarea.focus();
  } else {
    drawer.classList.add("hidden");
  }
}

function handleNotesInput(chapterId, text) {
  if (text.trim().length > 0) {
    appState.notes[chapterId] = text;
  } else {
    delete appState.notes[chapterId];
  }

  const noteBtn = document.getElementById(`btn-note-${chapterId}`);
  if (noteBtn) {
    if (text.trim().length > 0) {
      noteBtn.classList.add("has-notes");
    } else {
      noteBtn.classList.remove("has-notes");
    }
  }

  saveStateToStorage();
}

/* ==========================================================================
   Metrics & Calculation Engine
   ========================================================================== */

function getOverallCompletionPercentage() {
  let total = 0;
  let done = 0;

  SYLLABUS_DATA.groups.forEach((g) => {
    g.papers.forEach((p) => {
      p.parts.forEach((pt) => {
        pt.chapters.forEach((c) => {
          total++;
          if (appState.completed[c.id]) done++;
        });
      });
    });
  });

  return total > 0 ? Math.round((done / total) * 100) : 0;
}

function updateAllMetrics() {
  let totalChapters = 0;
  let completedChapters = 0;
  let totalRevs = 0;

  let g1Total = 0;
  let g1Done = 0;

  let g2Total = 0;
  let g2Done = 0;

  SYLLABUS_DATA.groups.forEach((group) => {
    group.papers.forEach((paper) => {
      paper.parts.forEach((part) => {
        part.chapters.forEach((chapter) => {
          totalChapters++;
          if (appState.completed[chapter.id]) completedChapters++;
          
          if (appState.revisions[chapter.id]) {
            totalRevs += appState.revisions[chapter.id].length;
          }

          if (group.id === "group-1") {
            g1Total++;
            if (appState.completed[chapter.id]) g1Done++;
          } else if (group.id === "group-2") {
            g2Total++;
            if (appState.completed[chapter.id]) g2Done++;
          }
        });
      });
    });
  });

  const overallPercent = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
  const g1Percent = g1Total > 0 ? Math.round((g1Done / g1Total) * 100) : 0;
  const g2Percent = g2Total > 0 ? Math.round((g2Done / g2Total) * 100) : 0;

  // Update Overall Percent Gauge
  const percentText = document.getElementById("overallPercentText");
  const completedText = document.getElementById("completedChaptersCount");
  const totalText = document.getElementById("totalChaptersCount");
  const revsText = document.getElementById("totalRevisionsDone");

  if (percentText) percentText.textContent = `${overallPercent}%`;
  if (completedText) completedText.textContent = completedChapters;
  if (totalText) totalText.textContent = totalChapters;
  if (revsText) revsText.textContent = totalRevs;

  // SVG Circular Gauge Animation (Circumference = 2 * PI * 52 = ~326.7)
  const gaugeFill = document.getElementById("mainGaugeFill");
  if (gaugeFill) {
    const circumference = 326.7;
    const offset = circumference - (overallPercent / 100) * circumference;
    gaugeFill.style.strokeDashoffset = offset;
  }

  // Update Group 1 Card
  const g1PercentText = document.getElementById("g1PercentText");
  const g1Bar = document.getElementById("g1ProgressBar");
  const g1Ratio = document.getElementById("g1RatioText");
  if (g1PercentText) g1PercentText.textContent = `${g1Percent}%`;
  if (g1Bar) g1Bar.style.width = `${g1Percent}%`;
  if (g1Ratio) g1Ratio.textContent = `${g1Done}/${g1Total} Ch`;

  // Update Group 2 Card
  const g2PercentText = document.getElementById("g2PercentText");
  const g2Bar = document.getElementById("g2ProgressBar");
  const g2Ratio = document.getElementById("g2RatioText");
  if (g2PercentText) g2PercentText.textContent = `${g2Percent}%`;
  if (g2Bar) g2Bar.style.width = `${g2Percent}%`;
  if (g2Ratio) g2Ratio.textContent = `${g2Done}/${g2Total} Ch`;
}

function updatePaperMetrics(paperId) {
  let paperObj = null;
  SYLLABUS_DATA.groups.forEach((g) => {
    const found = g.papers.find((p) => p.id === paperId);
    if (found) paperObj = found;
  });

  if (!paperObj) return;

  let total = 0;
  let done = 0;

  paperObj.parts.forEach((part, partIdx) => {
    let partDone = 0;
    part.chapters.forEach((c) => {
      total++;
      if (appState.completed[c.id]) {
        done++;
        partDone++;
      }
    });

    const partTag = document.getElementById(`part-tag-${paperId}-${partIdx}`);
    if (partTag) {
      partTag.textContent = `${partDone}/${part.chapters.length} Finished`;
    }
  });

  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  const pctEl = document.getElementById(`paper-percent-${paperId}`);
  const cntEl = document.getElementById(`paper-count-${paperId}`);
  const fillEl = document.getElementById(`paper-fill-${paperId}`);
  const cardEl = document.getElementById(`card-${paperId}`);

  if (pctEl) pctEl.textContent = `${percent}%`;
  if (cntEl) cntEl.textContent = `${done}/${total} Done`;
  if (fillEl) fillEl.style.width = `${percent}%`;
  
  if (cardEl) {
    if (done === total && total > 0) {
      cardEl.classList.add("completed-all");
    } else {
      cardEl.classList.remove("completed-all");
    }
  }
}

/* ==========================================================================
   Filter, Search & View Operations
   ========================================================================== */

function isChapterMatchingFilters(chapter, paperName, paperCode) {
  // Search query filter
  if (currentSearchQuery) {
    const q = currentSearchQuery.toLowerCase();
    const matchesTitle = chapter.title.toLowerCase().includes(q);
    const matchesSubtopics = chapter.subtopics.toLowerCase().includes(q);
    const matchesPaperName = paperName.toLowerCase().includes(q);
    const matchesPaperCode = paperCode.toLowerCase().includes(q);
    const matchesChapterNum = `ch ${chapter.number}`.includes(q) || `chapter ${chapter.number}`.includes(q);

    if (!matchesTitle && !matchesSubtopics && !matchesPaperName && !matchesPaperCode && !matchesChapterNum) {
      return false;
    }
  }

  // Status Filter
  if (currentStatusFilter === "pending") {
    if (appState.completed[chapter.id]) return false;
  } else if (currentStatusFilter === "completed") {
    if (!appState.completed[chapter.id]) return false;
  } else if (currentStatusFilter === "bookmarked") {
    if (!appState.bookmarks[chapter.id]) return false;
  } else if (currentStatusFilter === "important") {
    if (!chapter.important) return false;
  } else if (currentStatusFilter === "revised") {
    const revs = appState.revisions[chapter.id];
    if (!revs || revs.length === 0) return false;
  }

  return true;
}

function switchGroupTab(groupId) {
  currentGroupFilter = groupId;
  
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if (btn.getAttribute("data-group") === groupId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderSyllabus();
}

function handleSearch(val) {
  currentSearchQuery = val.trim();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    if (currentSearchQuery.length > 0) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
  }
  renderSyllabus();
}

function clearSearch() {
  const searchInput = document.getElementById("chapterSearchInput");
  if (searchInput) searchInput.value = "";
  currentSearchQuery = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");
  renderSyllabus();
}

function applyStatusFilter(val) {
  currentStatusFilter = val;
  renderSyllabus();
}

function clearAllFilters() {
  currentGroupFilter = "all";
  currentStatusFilter = "all";
  currentSearchQuery = "";
  
  const searchInput = document.getElementById("chapterSearchInput");
  if (searchInput) searchInput.value = "";

  const filterSelect = document.getElementById("statusFilter");
  if (filterSelect) filterSelect.value = "all";

  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-group") === "all");
  });

  renderSyllabus();
}

function togglePaperCollapse(paperId) {
  const card = document.getElementById(`card-${paperId}`);
  if (card) {
    card.classList.toggle("collapsed");
  }
}

function toggleExpandAll() {
  allCollapsed = !allCollapsed;
  const cards = document.querySelectorAll(".paper-card");
  cards.forEach((card) => {
    if (allCollapsed) {
      card.classList.add("collapsed");
    } else {
      card.classList.remove("collapsed");
    }
  });

  const expandText = document.getElementById("expandText");
  if (expandText) {
    expandText.textContent = allCollapsed ? "Expand All" : "Collapse All";
  }
}

/* ==========================================================================
   Exam Date Countdown & Target Modal
   ========================================================================== */

function openExamDateModal() {
  const modal = document.getElementById("examDateModal");
  const picker = document.getElementById("examDatePicker");
  if (picker) {
    picker.value = appState.examTargetDate || "2026-12-21";
  }
  modal.classList.remove("hidden");
}

function closeExamDateModal() {
  const modal = document.getElementById("examDateModal");
  modal.classList.add("hidden");
}

function saveExamTargetDate() {
  const picker = document.getElementById("examDatePicker");
  if (picker && picker.value) {
    appState.examTargetDate = picker.value;
    saveStateToStorage();
    updateCountdown();
    closeExamDateModal();
  }
}

function setPresetExamDate(preset) {
  const currentYear = new Date().getFullYear();
  const picker = document.getElementById("examDatePicker");
  if (preset === "dec") {
    picker.value = `${currentYear}-12-21`;
  } else if (preset === "june") {
    picker.value = `${currentYear + 1}-06-01`;
  }
}

function updateCountdown() {
  const countdownEl = document.getElementById("examCountdownDays");
  if (!countdownEl || !appState.examTargetDate) return;

  const target = new Date(appState.examTargetDate).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    countdownEl.textContent = "Exam Time!";
  } else {
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    countdownEl.textContent = `${days} Days Left`;
  }
}

/* ==========================================================================
   Pomodoro Focus Timer Engine
   ========================================================================== */

function togglePomodoroModal() {
  const modal = document.getElementById("pomodoroModal");
  modal.classList.toggle("hidden");
  updatePomoDisplay();
}

function setPomoTime(minutes, label) {
  if (pomoIsRunning) {
    clearInterval(pomoTimerInterval);
    pomoIsRunning = false;
    document.getElementById("pomoStartBtn").innerHTML = `<span>Start Timer</span>`;
  }
  pomoTotalSeconds = minutes * 60;
  pomoRemainingSeconds = pomoTotalSeconds;
  pomoCurrentMode = label;
  
  document.querySelectorAll(".pomo-preset-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.includes(`${minutes}m`));
  });

  updatePomoDisplay();
}

function togglePomoTimer() {
  const btn = document.getElementById("pomoStartBtn");
  if (pomoIsRunning) {
    clearInterval(pomoTimerInterval);
    pomoIsRunning = false;
    btn.innerHTML = `<span>Resume Timer</span>`;
  } else {
    pomoIsRunning = true;
    btn.innerHTML = `<span>Pause Timer</span>`;
    pomoTimerInterval = setInterval(() => {
      if (pomoRemainingSeconds > 0) {
        pomoRemainingSeconds--;
        updatePomoDisplay();
      } else {
        clearInterval(pomoTimerInterval);
        pomoIsRunning = false;
        btn.innerHTML = `<span>Start Timer</span>`;
        playAudioChime();
        appState.pomoCompletedCount++;
        saveStateToStorage();
        updatePomoDisplay();
        triggerConfetti();
        alert(`Time is up! Great job finishing your ${pomoCurrentMode}!`);
      }
    }, 1000);
  }
}

function resetPomoTimer() {
  if (pomoTimerInterval) clearInterval(pomoTimerInterval);
  pomoIsRunning = false;
  pomoRemainingSeconds = pomoTotalSeconds;
  document.getElementById("pomoStartBtn").innerHTML = `<span>Start Timer</span>`;
  updatePomoDisplay();
}

function updatePomoDisplay() {
  const minutes = Math.floor(pomoRemainingSeconds / 60);
  const seconds = pomoRemainingSeconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const digits = document.getElementById("pomoDigits");
  const modeLabel = document.getElementById("pomoModeLabel");
  const ringFill = document.getElementById("pomoRingFill");
  const headerBadge = document.getElementById("pomoHeaderBadge");
  const completedCount = document.getElementById("pomoCompletedSessions");

  if (digits) digits.textContent = timeFormatted;
  if (modeLabel) modeLabel.textContent = pomoCurrentMode;
  
  if (ringFill) {
    const percent = pomoTotalSeconds > 0 ? (pomoRemainingSeconds / pomoTotalSeconds) * 100 : 0;
    ringFill.style.width = `${percent}%`;
  }

  if (headerBadge) {
    if (pomoIsRunning) {
      headerBadge.classList.remove("hidden");
      headerBadge.textContent = timeFormatted;
    } else {
      headerBadge.classList.add("hidden");
    }
  }

  if (completedCount) {
    completedCount.textContent = appState.pomoCompletedCount || 0;
  }
}

// Built-in Web Audio API Chime (Pleasant synthesizer bells)
function playAudioChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const playTone = (freq, time, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + duration);
    };

    const now = ctx.currentTime;
    playTone(587.33, now, 0.4); // D5
    playTone(880.00, now + 0.15, 0.7); // A5
  } catch (e) {
    console.log("Audio chime playback error:", e);
  }
}

/* ==========================================================================
   Data Backup, Export & Restore
   ========================================================================== */

function toggleBackupModal() {
  const modal = document.getElementById("backupModal");
  modal.classList.toggle("hidden");
}

function exportUserData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement("a");
  const dateStamp = new Date().toISOString().split("T")[0];
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `CS_Executive_Study_Progress_${dateStamp}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importUserData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && typeof imported === "object") {
        appState = {
          completed: imported.completed || {},
          revisions: imported.revisions || {},
          bookmarks: imported.bookmarks || {},
          notes: imported.notes || {},
          examTargetDate: imported.examTargetDate || "2026-12-21",
          pomoCompletedCount: imported.pomoCompletedCount || 0
        };
        saveStateToStorage();
        renderSyllabus();
        updateAllMetrics();
        updateCountdown();
        toggleBackupModal();
        alert("Progress backup imported successfully!");
      }
    } catch (err) {
      alert("Error reading backup file. Please ensure it is a valid JSON file exported from this app.");
    }
  };
  reader.readAsText(file);
}

function confirmResetProgress() {
  const confirmed = confirm("Are you sure you want to reset all your completed checkboxes, revisions, and notes? This cannot be undone.");
  if (confirmed) {
    appState = {
      completed: {},
      revisions: {},
      bookmarks: {},
      notes: {},
      examTargetDate: "2026-12-21",
      pomoCompletedCount: 0
    };
    saveStateToStorage();
    renderSyllabus();
    updateAllMetrics();
    toggleBackupModal();
    alert("Workspace progress has been reset.");
  }
}

/* ==========================================================================
   Utilities & Modal Backdrop Handler
   ========================================================================== */

function handleModalBackdrop(event, modalId) {
  if (event.target.id === modalId) {
    document.getElementById(modalId).classList.add("hidden");
  }
}

function setupRandomQuote() {
  const quoteEl = document.getElementById("dailyQuote");
  if (quoteEl) {
    const randomIdx = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    quoteEl.textContent = MOTIVATIONAL_QUOTES[randomIdx];
  }
}

function printChecklist() {
  window.print();
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   Celebration Confetti Effect
   ========================================================================== */

function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ["#3b82f6", "#60a5fa", "#38bdf8", "#06b6d4", "#10b981", "#fbbf24", "#ffffff"];

  for (let i = 0; i < 75; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      w: Math.random() * 8 + 4,
      h: Math.random() * 8 + 4,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activePieces = 0;

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        activePieces++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (activePieces > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  };

  render();
}
