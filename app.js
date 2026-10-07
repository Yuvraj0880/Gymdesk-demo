/* ============================================================
   Gym Desk — Member & Fee Management
   With Member Photo Upload, Online/Cash Breakdown & WhatsApp Reminders
   ============================================================ */

/* ---------------- constants ---------------- */
var GYM_NAME = 'Gym Desk';

var PLAN_OPTIONS = {
  monthly:    { label: 'Monthly',     months: 1,  amount: 700 },
  quarterly:  { label: 'Quarterly',   months: 3,  amount: 2000 },
  halfyearly: { label: 'Half-Yearly', months: 6,  amount: 3800 },
  yearly:     { label: 'Yearly',      months: 12, amount: 7000 }
};

var ICON_DASHBOARD = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>';
var ICON_MEMBERS   = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
var ICON_PAYMENTS  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>';
var ICON_WHATSAPP  = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>';
var ICON_PHONE     = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
var ICON_CAMERA    = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>';
var ICON_GRID      = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>';
var ICON_LIST      = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
var ICON_USER      = '<svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
var ICON_LOCK      = '<svg class="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
var ICON_EYE       = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
var ICON_EYE_OFF   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
var ICON_DOWNLOAD  = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
var ICON_LOGOUT    = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>';
var ICON_GITHUB    = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>';
var ICON_INSTAGRAM = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';

var NAV_ITEMS = [
  { view: 'dashboard', label: 'Dashboard', icon: ICON_DASHBOARD },
  { view: 'members',   label: 'Members',   icon: ICON_MEMBERS },
  { view: 'payments',  label: 'Payments',  icon: ICON_PAYMENTS }
];

/* ---------------- state ---------------- */
var state = { members: [], payments: [] };
var sb = null; // Supabase client instance
var currentView = 'dashboard';
var memberSearchQuery = '';
var memberStatusFilter = 'all';
var memberViewMode = 'grid'; // 'grid' or 'table'
var modalPhotoData = ''; // Temporary holder for member modal photo
var paymentMonthFilter = ''; // '' means all months, or 'YYYY-MM'

/* ---------------- utils ---------------- */
function genId(prefix) { return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8); }

function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, function(c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function formatCurrency(n) { return '₹' + Number(n || 0).toLocaleString('en-IN'); }

function formatLocalDate(d) {
  if (!(d instanceof Date) || isNaN(d.getTime())) d = new Date();
  var y = d.getFullYear();
  var m = ('0' + (d.getMonth() + 1)).slice(-2);
  var day = ('0' + d.getDate()).slice(-2);
  return y + '-' + m + '-' + day;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  var d = new Date(dateStr + 'T00:00:00');
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function todayStr() {
  return formatLocalDate(new Date());
}

function daysUntil(dateStr) {
  if (!dateStr) return -9999;
  var end = new Date(dateStr + 'T00:00:00');
  var today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.round((end - today) / 86400000);
}

function addMonthsStr(dateStr, months) {
  var d = new Date(dateStr + 'T00:00:00');
  d.setMonth(d.getMonth() + months);
  return formatLocalDate(d);
}

function addDaysStr(dateStr, days) {
  var d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return formatLocalDate(d);
}

function getMemberStatus(m) {
  if (!m.planEnd) return 'expired';
  var diff = daysUntil(m.planEnd);
  if (diff < 0) return 'expired';
  if (diff <= 7) return 'expiring';
  return 'active';
}

function statusLabel(s) {
  return { active: 'Active', expiring: 'Expiring Soon', expired: 'Expired' }[s] || s;
}

function formatMonthDisplay(ym) {
  if (!ym) return 'All Months';
  var parts = ym.split('-');
  if (parts.length < 2) return ym;
  var d = new Date(Number(parts[0]), Number(parts[1]) - 1, 1);
  if (isNaN(d.getTime())) return ym;
  return d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
}

/* ---------------- CSV Export & Full Gym Backup ---------------- */
function escapeCsv(val) {
  if (val == null) return '""';
  var str = String(val).replace(/"/g, '""');
  return '"' + str + '"';
}

function triggerDownload(filename, content, mime) {
  var blob = new Blob(['\uFEFF' + content], { type: mime || 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
}

function exportMembersCsv() {
  if (!state.members.length) {
    toast('Export karne ke liye koi member data nahi mila');
    return;
  }
  var headers = [
    'Member ID',
    'Full Name',
    'Phone Number',
    'Plan Type',
    'Plan Amount (INR)',
    'Plan Start Date',
    'Plan Expiry Date',
    'Status',
    'Validity Info',
    'Emergency Contact',
    'Has Photo'
  ];
  var rows = state.members.map(function(m) {
    var st = getMemberStatus(m);
    var diff = daysUntil(m.planEnd);
    var valText = st === 'active' ? (diff + ' days left') : (st === 'expiring' ? (diff + ' days left') : (Math.abs(diff) + ' days overdue'));
    return [
      escapeCsv(m.id),
      escapeCsv(m.name),
      escapeCsv(m.phone),
      escapeCsv(PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType),
      escapeCsv(m.planAmount),
      escapeCsv(m.planStart),
      escapeCsv(m.planEnd),
      escapeCsv(statusLabel(st)),
      escapeCsv(valText),
      escapeCsv(m.emergencyContact || '—'),
      escapeCsv(m.photoUrl ? 'Yes' : 'No')
    ].join(',');
  });
  var csv = [headers.map(escapeCsv).join(',')].concat(rows).join('\r\n');
  triggerDownload('Gym_Desk_Members_Backup_' + todayStr() + '.csv', csv);
  toast('Members CSV download ho gaya!');
}

function exportPaymentsCsv() {
  if (!state.payments.length) {
    toast('Export karne ke liye koi payment data nahi mila');
    return;
  }
  var headers = [
    'Payment ID',
    'Date',
    'Member Name',
    'Member Phone',
    'Amount (INR)',
    'Payment Method',
    'Note / Reference',
    'Member ID'
  ];
  var rows = state.payments.map(function(p) {
    var mem = state.members.find(function(m) { return m.id === p.memberId || m.name.toLowerCase() === (p.memberName || '').toLowerCase(); });
    return [
      escapeCsv(p.id),
      escapeCsv(p.date),
      escapeCsv(p.memberName),
      escapeCsv(mem ? mem.phone : '—'),
      escapeCsv(p.amount),
      escapeCsv(p.method),
      escapeCsv(p.note || '—'),
      escapeCsv(p.memberId || '—')
    ].join(',');
  });
  var csv = [headers.map(escapeCsv).join(',')].concat(rows).join('\r\n');
  triggerDownload('Gym_Desk_Payments_Backup_' + todayStr() + '.csv', csv);
  toast('Payments CSV download ho gaya!');
}

function exportAllGymData() {
  if (!state.members.length && !state.payments.length) {
    toast('Backup lene ke liye koi data nahi hai');
    return;
  }
  exportMembersCsv();
  setTimeout(function() {
    exportPaymentsCsv();
  }, 350);
  toast('Saara Gym Data (Members + Payments) backup download ho gaya! 📁');
}

/* ---------------- Avatar & Initials Generator ---------------- */
var AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #10B981, #059669)',
  'linear-gradient(135deg, #3B82F6, #1D4ED8)',
  'linear-gradient(135deg, #F59E0B, #D97706)',
  'linear-gradient(135deg, #8B5CF6, #6D28D9)',
  'linear-gradient(135deg, #EC4899, #BE185D)',
  'linear-gradient(135deg, #06B6D4, #0E7490)',
  'linear-gradient(135deg, #F97316, #C2410C)'
];

function getInitials(name) {
  if (!name) return 'GD';
  var parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getAvatarGradient(name) {
  if (!name) return AVATAR_GRADIENTS[0];
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  var idx = Math.abs(hash) % AVATAR_GRADIENTS.length;
  return AVATAR_GRADIENTS[idx];
}

function renderAvatar(member, sizeClass, extraClass) {
  sizeClass = sizeClass || 'avatar-md';
  extraClass = extraClass || '';
  var name = member ? (member.name || member.memberName || 'Member') : 'Member';
  var photo = member ? (member.photoUrl || member.photo_url || '') : '';

  if (photo) {
    return '<div class="avatar ' + sizeClass + ' ' + extraClass + '">'
      + '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(name) + '" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">'
      + '<span class="avatar-fallback" style="display:none;background:' + getAvatarGradient(name) + '">' + escapeHtml(getInitials(name)) + '</span>'
      + '</div>';
  }
  return '<div class="avatar ' + sizeClass + ' ' + extraClass + '">'
    + '<span class="avatar-fallback" style="background:' + getAvatarGradient(name) + '">' + escapeHtml(getInitials(name)) + '</span>'
    + '</div>';
}

/* ---------------- Client-Side Image Compression ---------------- */
function compressImage(file, targetSize, quality) {
  return new Promise(function(resolve, reject) {
    targetSize = targetSize || 320;
    quality = quality || 0.82;
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function(e) {
      var img = new Image();
      img.onerror = reject;
      img.onload = function() {
        var canvas = document.createElement('canvas');
        var minDim = Math.min(img.width, img.height);
        var startX = (img.width - minDim) / 2;
        var startY = (img.height - minDim) / 2;

        var finalDim = Math.min(targetSize, minDim);
        canvas.width = finalDim;
        canvas.height = finalDim;

        var ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, finalDim, finalDim);

        var dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ---------------- WhatsApp Helper ---------------- */
function getWhatsAppUrl(phone, msg) {
  if (!phone) return null;
  var digits = String(phone).replace(/\D/g, '');
  if (!digits) return null;
  if (digits.length === 10) {
    digits = '91' + digits;
  } else if (digits.length === 11 && digits.indexOf('0') === 0) {
    digits = '91' + digits.slice(1);
  }
  var url = 'https://wa.me/' + digits;
  if (msg) {
    url += '?text=' + encodeURIComponent(msg);
  }
  return url;
}

function openWhatsApp(phone, name, customMsg) {
  if (!customMsg && name) {
    customMsg = 'Namaste ' + name + ' ji! 🙏\n' + GYM_NAME + ' se judne ke liye dhanyawad.';
  }
  var url = getWhatsAppUrl(phone, customMsg);
  if (!url) {
    toast((name ? escapeHtml(name) + ' ka ' : '') + 'valid phone number nahi mila');
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ---------------- Supabase <-> App Data Mapping ---------------- */
function toDbMember(m) {
  return {
    name: m.name,
    phone: m.phone,
    email: null,
    photo_url: m.photoUrl || null,
    plan_type: m.planType,
    plan_amount: m.planAmount,
    plan_start: m.planStart,
    plan_end: m.planEnd,
    frozen: false,
    emergency_contact: m.emergencyContact || null
  };
}

function fromDbMember(row) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    photoUrl: row.photo_url || '',
    planType: row.plan_type,
    planAmount: Number(row.plan_amount || 0),
    planStart: row.plan_start,
    planEnd: row.plan_end,
    emergencyContact: row.emergency_contact || ''
  };
}

function toDbPayment(p) {
  return {
    member_id: p.memberId || null,
    member_name: p.memberName,
    amount: p.amount,
    date: p.date,
    method: p.method,
    note: p.note || null
  };
}

function fromDbPayment(row) {
  return {
    id: row.id,
    memberId: row.member_id,
    memberName: row.member_name,
    amount: Number(row.amount || 0),
    date: row.date,
    method: row.method || 'Online',
    note: row.note || ''
  };
}

/* ---------------- Storage Layer & Demo Mode ---------------- */
var DEMO_STORAGE_MEMBERS_KEY = 'tg_demo_members';
var DEMO_STORAGE_PAYMENTS_KEY = 'tg_demo_payments';

function isDemo() {
  return typeof DEMO_MODE !== 'undefined' && Boolean(DEMO_MODE);
}

function storageRead(key) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn('localStorage read error for key: ' + key, e);
    return null;
  }
}

function storageWrite(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.warn('localStorage write error for key: ' + key, e);
    return false;
  }
}

function getInitialDemoData() {
  var t = todayStr();
  var members = [
    {
      id: 'mem_demo_1',
      name: 'Rohan Verma',
      phone: '9800000001',
      photoUrl: '',
      planType: 'monthly',
      planAmount: 700,
      planStart: addDaysStr(t, -15),
      planEnd: addDaysStr(t, 15),
      emergencyContact: '9800099901'
    },
    {
      id: 'mem_demo_2',
      name: 'Priya Sharma',
      phone: '9800000002',
      photoUrl: '',
      planType: 'quarterly',
      planAmount: 2000,
      planStart: addDaysStr(addMonthsStr(t, -3), 4),
      planEnd: addDaysStr(t, 4),
      emergencyContact: '9800099902'
    },
    {
      id: 'mem_demo_3',
      name: 'Amit Verma',
      phone: '9800000003',
      photoUrl: '',
      planType: 'monthly',
      planAmount: 700,
      planStart: addDaysStr(t, -38),
      planEnd: addDaysStr(t, -8),
      emergencyContact: ''
    },
    {
      id: 'mem_demo_4',
      name: 'Vikram Singh',
      phone: '9800000004',
      photoUrl: '',
      planType: 'yearly',
      planAmount: 7000,
      planStart: addMonthsStr(t, -4),
      planEnd: addMonthsStr(t, 8),
      emergencyContact: '9800099904'
    },
    {
      id: 'mem_demo_5',
      name: 'Neha Patel',
      phone: '9800000005',
      photoUrl: '',
      planType: 'halfyearly',
      planAmount: 3800,
      planStart: addMonthsStr(t, -2),
      planEnd: addMonthsStr(t, 4),
      emergencyContact: ''
    },
    {
      id: 'mem_demo_6',
      name: 'Aman Gupta',
      phone: '9800000006',
      photoUrl: '',
      planType: 'monthly',
      planAmount: 700,
      planStart: addDaysStr(t, -28),
      planEnd: addDaysStr(t, 2),
      emergencyContact: '9800099906'
    },
    {
      id: 'mem_demo_7',
      name: 'Pooja Joshi',
      phone: '9800000007',
      photoUrl: '',
      planType: 'quarterly',
      planAmount: 2000,
      planStart: addDaysStr(addMonthsStr(t, -4), -20),
      planEnd: addDaysStr(t, -20),
      emergencyContact: ''
    },
    {
      id: 'mem_demo_8',
      name: 'Rahul Yadav',
      phone: '9800000008',
      photoUrl: '',
      planType: 'monthly',
      planAmount: 700,
      planStart: addDaysStr(t, -5),
      planEnd: addDaysStr(t, 25),
      emergencyContact: '9800099908'
    }
  ];

  var payments = [
    {
      id: 'pay_demo_1',
      memberId: 'mem_demo_1',
      memberName: 'Rohan Verma',
      amount: 700,
      date: t,
      method: 'Online',
      note: 'Monthly Renewal UPI'
    },
    {
      id: 'pay_demo_2',
      memberId: 'mem_demo_8',
      memberName: 'Rahul Yadav',
      amount: 700,
      date: t,
      method: 'Cash',
      note: 'New joining fee (Cash)'
    },
    {
      id: 'pay_demo_3',
      memberId: 'mem_demo_6',
      memberName: 'Aman Gupta',
      amount: 700,
      date: addMonthsStr(t, -1),
      method: 'Online',
      note: 'Monthly fee PhonePe'
    },
    {
      id: 'pay_demo_4',
      memberId: 'mem_demo_5',
      memberName: 'Neha Patel',
      amount: 3800,
      date: addMonthsStr(t, -1),
      method: 'Online',
      note: 'Half-yearly pack GPay'
    },
    {
      id: 'pay_demo_5',
      memberId: 'mem_demo_2',
      memberName: 'Priya Sharma',
      amount: 2000,
      date: addMonthsStr(t, -2),
      method: 'Online',
      note: 'Quarterly pack UPI'
    },
    {
      id: 'pay_demo_6',
      memberId: 'mem_demo_3',
      memberName: 'Amit Verma',
      amount: 700,
      date: addMonthsStr(t, -2),
      method: 'Cash',
      note: 'Monthly Cash payment'
    },
    {
      id: 'pay_demo_7',
      memberId: 'mem_demo_1',
      memberName: 'Rohan Verma',
      amount: 700,
      date: addMonthsStr(t, -3),
      method: 'Online',
      note: 'Quarter renewal UPI'
    },
    {
      id: 'pay_demo_8',
      memberId: 'mem_demo_4',
      memberName: 'Vikram Singh',
      amount: 7000,
      date: addMonthsStr(t, -4),
      method: 'Cash',
      note: 'Annual VIP cash at desk'
    },
    {
      id: 'pay_demo_9',
      memberId: 'mem_demo_7',
      memberName: 'Pooja Joshi',
      amount: 2000,
      date: addMonthsStr(t, -4),
      method: 'Online',
      note: 'Quarterly plan renewal'
    },
    {
      id: 'pay_demo_10',
      memberId: 'mem_demo_1',
      memberName: 'Rohan Verma',
      amount: 700,
      date: addMonthsStr(t, -5),
      method: 'Cash',
      note: 'Monthly fee Cash counter'
    }
  ];

  return { members: members, payments: payments };
}

async function loadAll() {
  if (isDemo()) {
    try {
      var localMembers = storageRead(DEMO_STORAGE_MEMBERS_KEY);
      var localPayments = storageRead(DEMO_STORAGE_PAYMENTS_KEY);

      if (localMembers && Array.isArray(localMembers) && localPayments && Array.isArray(localPayments)) {
        state.members = localMembers;
        state.payments = localPayments;
      } else {
        var initial = getInitialDemoData();
        state.members = initial.members;
        state.payments = initial.payments;
        storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
        storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
      }
    } catch (e) {
      console.warn('Fallback to in-memory demo data', e);
      var fallback = getInitialDemoData();
      state.members = fallback.members;
      state.payments = fallback.payments;
    }
    render();
    return;
  }

  try {
    var mRes = await sb.from('members').select('*');
    if (mRes.error) throw mRes.error;
    var pRes = await sb.from('payments').select('*').order('date', { ascending: false }).limit(2000);
    if (pRes.error) throw pRes.error;
    state.members = mRes.data.map(fromDbMember);
    state.payments = pRes.data.map(fromDbPayment);
    render();
  } catch (e) {
    console.error(e);
    showConnectionError(e);
  }
}

async function insertMember(data) {
  if (isDemo()) {
    var member = Object.assign({ id: genId('mem') }, data);
    state.members.push(member);
    storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
    return member;
  }
  var res = await sb.from('members').insert([toDbMember(data)]).select();
  if (res.error) throw res.error;
  return fromDbMember(res.data[0]);
}

async function updateMember(id, data) {
  if (isDemo()) {
    var idx = state.members.findIndex(function(m) { return m.id === id; });
    if (idx >= 0) {
      var merged = Object.assign({}, state.members[idx], data);
      state.members[idx] = merged;
      storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
      return merged;
    }
    return null;
  }
  var res = await sb.from('members').update(toDbMember(data)).eq('id', id);
  if (res.error) throw res.error;
  return data;
}

async function deleteMember(id) {
  if (isDemo()) {
    state.members = state.members.filter(function(m) { return m.id !== id; });
    storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
    return true;
  }
  var res = await sb.from('members').delete().eq('id', id);
  if (res.error) throw res.error;
  return true;
}

async function insertPayment(data) {
  if (isDemo()) {
    var payment = Object.assign({ id: genId('pay') }, data);
    state.payments.unshift(payment);
    storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
    return payment;
  }
  var res = await sb.from('payments').insert([toDbPayment(data)]).select();
  if (res.error) throw res.error;
  return fromDbPayment(res.data[0]);
}

function showConnectionError(e) {
  var main = document.getElementById('main');
  if (!main) return;
  main.innerHTML = '<div class="panel"><h3>Supabase se connect nahi ho paaya</h3>'
    + '<p class="empty-note">Check karo: (1) config.js mein sahi Project URL aur anon key dali hai, (2) supabase-schema.sql SQL editor mein run kar chuke ho, (3) internet theek hai.</p>'
    + '<p class="muted">Technical error: ' + escapeHtml(e && e.message ? e.message : String(e)) + '</p>'
    + '<div style="margin-top:1rem;"><button class="btn-primary" data-action="load-demo">▶ Preview With Demo Data</button></div></div>';
}

/* ---------------- CRUD Actions ---------------- */
function toast(msg) {
  var el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.classList.remove('show'); }, 3500);
}

async function addMember(data) {
  if (isDemo()) {
    await insertMember(data);
    render();
    toast(data.name + ' successfully add ho gaya!');
    return;
  }
  var tempId = genId('tmp');
  state.members.push(Object.assign({ id: tempId }, data));
  render();
  if (!sb) {
    toast(data.name + ' add ho gaya (Demo Mode)');
    return;
  }
  try {
    var created = await insertMember(data);
    var idx = state.members.findIndex(function(m) { return m.id === tempId; });
    if (idx >= 0) state.members[idx] = created;
    toast(data.name + ' successfully add ho gaya!');
    render();
  } catch (err) {
    console.error(err);
    toast('Save nahi hua: ' + (err.message || String(err)));
    state.members = state.members.filter(function(m) { return m.id !== tempId; });
    render();
  }
}

async function editMember(id, data) {
  var idx = state.members.findIndex(function(m) { return m.id === id; });
  if (idx < 0) return;
  if (isDemo()) {
    await updateMember(id, data);
    render();
    toast('Member details update ho gayi!');
    return;
  }
  var merged = Object.assign({}, state.members[idx], data);
  state.members[idx] = merged;
  render();
  if (!sb) {
    toast('Member details update ho gayi (Demo Mode)');
    return;
  }
  try {
    await updateMember(id, merged);
    toast('Member details update ho gayi!');
  } catch (err) {
    console.error(err);
    toast('Update nahi hua: ' + (err.message || String(err)));
  }
}

async function removeMember(id) {
  var m = state.members.find(function(x) { return x.id === id; });
  var name = m ? m.name : 'Is member';
  if (!confirm(name + ' ko delete karein? Ye action undo nahi ho sakti.')) return;
  if (isDemo()) {
    await deleteMember(id);
    render();
    toast(name + ' delete ho gaya');
    return;
  }
  state.members = state.members.filter(function(x) { return x.id !== id; });
  render();
  if (!sb) {
    toast('Member delete ho gaya (Demo Mode)');
    return;
  }
  try {
    await deleteMember(id);
    toast(name + ' delete ho gaya');
  } catch (err) {
    console.error(err);
    toast('Delete nahi hua: ' + (err.message || String(err)));
  }
}

async function addPayment(data, renewMonths) {
  if (renewMonths && renewMonths > 0) {
    var member = state.members.find(function(m) { return m.id === data.memberId; });
    if (member) {
      var base = (member.planEnd && daysUntil(member.planEnd) > 0) ? member.planEnd : todayStr();
      var newEnd = addMonthsStr(base, renewMonths);
      await editMember(member.id, { planEnd: newEnd });
    }
  }

  if (isDemo()) {
    await insertPayment(data);
    render();
    toast('₹' + data.amount + ' (' + data.method + ') payment record ho gaya!');
    return;
  }

  var tempId = genId('tmp');
  state.payments.unshift(Object.assign({ id: tempId }, data));
  render();

  if (!sb) {
    toast('Payment record ho gaya (Demo Mode)');
    return;
  }
  try {
    var created = await insertPayment(data);
    var idx = state.payments.findIndex(function(p) { return p.id === tempId; });
    if (idx >= 0) state.payments[idx] = created;
    toast('₹' + data.amount + ' (' + data.method + ') payment record ho gaya!');
    render();
  } catch (err) {
    console.error(err);
    toast('Payment save nahi hua: ' + (err.message || String(err)));
    state.payments = state.payments.filter(function(p) { return p.id !== tempId; });
    render();
  }
}

async function editPayment(id, data) {
  var idx = state.payments.findIndex(function(p) { return p.id === id; });
  if (idx < 0) return;
  var merged = Object.assign({}, state.payments[idx], data);
  state.payments[idx] = merged;
  render();
  if (isDemo()) {
    storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
    toast('Payment record update ho gaya!');
    return;
  }
  if (!sb) {
    toast('Payment record update ho gaya (Demo Mode)');
    return;
  }
  var res = await sb.from('payments').update(toDbPayment(merged)).eq('id', id);
  if (res.error) {
    console.error(res.error);
    toast('Update nahi hua: ' + res.error.message);
  } else {
    toast('Payment record update ho gaya!');
  }
}

async function removePayment(id) {
  var p = state.payments.find(function(x) { return x.id === id; });
  if (!p) return;
  var amt = formatCurrency(p.amount);
  var name = p.memberName || 'Member';
  if (!confirm(amt + ' (' + name + ') ka payment record delete karein? Yeh action undo nahi ho sakti.')) return;
  closeModal();
  state.payments = state.payments.filter(function(x) { return x.id !== id; });
  render();
  if (isDemo()) {
    storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
    toast('Payment record delete ho gaya');
    return;
  }
  if (!sb) {
    toast('Payment delete ho gaya (Demo Mode)');
    return;
  }
  var res = await sb.from('payments').delete().eq('id', id);
  if (res.error) {
    console.error(res.error);
    toast('Delete nahi hua: ' + res.error.message);
  } else {
    toast('Payment record delete ho gaya');
  }
}

function openEditPaymentModal(id) {
  var p = state.payments.find(function(x) { return x.id === id; });
  if (!p) {
    toast('Payment record nahi mila');
    return;
  }
  var sorted = state.members.slice().sort(function(a, b) { return a.name.localeCompare(b.name); });

  var html = ''
    + '<div class="modal-overlay">'
    + '<div class="modal">'
    + '<div class="modal-header">'
    + '<h2>Edit Payment Record</h2>'
    + '<button class="modal-close-btn" data-action="close-modal">&times;</button>'
    + '</div>'
    + '<form id="editPaymentForm" data-payment-id="' + p.id + '">'
    + '<label>Member*<select name="memberId" id="editPayMemberSelect" required>'
    + '<option value="">-- Choose Member --</option>'
    + sorted.map(function(m) {
        var isSel = (p.memberId === m.id) || (!p.memberId && p.memberName === m.name);
        return '<option value="' + m.id + '"' + (isSel ? ' selected' : '') + '>' + escapeHtml(m.name) + ' (' + escapeHtml(m.phone) + ')</option>';
      }).join('')
    + '</select></label>'
    + '<div class="form-row">'
    + '<label>Amount (₹)*<input name="amount" type="number" min="1" required value="' + (p.amount != null ? p.amount : '') + '"></label>'
    + '<label>Payment Date*<input name="date" type="date" required value="' + (p.date || todayStr()) + '"></label>'
    + '</div>'
    + '<div class="form-row">'
    + '<label>Payment Method<select name="method">'
    + '<option value="Online"' + (p.method === 'Online' ? ' selected' : '') + '>Online</option>'
    + '<option value="Cash"' + (p.method === 'Cash' ? ' selected' : '') + '>Cash</option>'
    + '</select></label>'
    + '<label>Note / Ref<input name="note" placeholder="e.g. UPI Ref / Note" value="' + escapeHtml(p.note || '') + '"></label>'
    + '</div>'
    + '<div class="modal-actions" style="justify-content:space-between;">'
    + '<button type="button" class="btn-tiny btn-danger" data-action="delete-payment" data-id="' + p.id + '">🗑️ Delete Record</button>'
    + '<div style="display:flex;gap:0.5rem;">'
    + '<button type="button" class="btn-secondary" data-action="close-modal">Cancel</button>'
    + '<button type="submit" class="btn-primary">Save Changes</button>'
    + '</div>'
    + '</div></form></div></div>';

  document.getElementById('modalRoot').innerHTML = html;
}

/* ---------------- Modals ---------------- */
function closeModal() {
  document.getElementById('modalRoot').innerHTML = '';
}

function updateModalPhotoDisplay(photoUrl, name) {
  var previewEl = document.getElementById('modalAvatarPreview');
  var removeBtn = document.getElementById('modalRemovePhotoBtn');
  if (!previewEl) return;
  previewEl.innerHTML = renderAvatar({ name: name || 'Member', photoUrl: photoUrl }, 'avatar-lg');
  if (removeBtn) {
    removeBtn.style.display = photoUrl ? 'inline-flex' : 'none';
  }
}

function openMemberModal(id) {
  var editing = !!id;
  var m = editing ? state.members.find(function(x) { return x.id === id; }) : null;
  var today = todayStr();
  modalPhotoData = m ? (m.photoUrl || '') : '';

  var html = ''
    + '<div class="modal-overlay">'
    + '<div class="modal">'
    + '<div class="modal-header">'
    + '<h2>' + (editing ? 'Edit Member Details' : 'Add New Member') + '</h2>'
    + '<button class="modal-close-btn" data-action="close-modal">&times;</button>'
    + '</div>'
    + '<form id="memberForm" data-edit-id="' + (editing ? id : '') + '">'
    
    // Photo Upload Zone
    + '<div class="photo-upload-zone">'
    + '<div class="photo-preview-wrapper" id="modalPhotoTrigger">'
    + '<div id="modalAvatarPreview">' + renderAvatar({ name: (m ? m.name : 'New'), photoUrl: modalPhotoData }, 'avatar-lg') + '</div>'
    + '<div class="photo-cam-badge" title="Change Photo">' + ICON_CAMERA + '</div>'
    + '</div>'
    + '<div class="photo-upload-actions">'
    + '<input type="file" id="memberPhotoInput" accept="image/*" capture="user" style="display:none">'
    + '<button type="button" class="btn-tiny" id="modalPickPhotoBtn">' + ICON_CAMERA + '<span>' + (modalPhotoData ? 'Change Photo' : 'Upload / Capture Photo') + '</span></button>'
    + '<button type="button" class="btn-tiny btn-danger" id="modalRemovePhotoBtn" style="' + (modalPhotoData ? '' : 'display:none;') + '">&times; Remove</button>'
    + '</div>'
    + '<div class="photo-upload-hint">Auto-compressed (~30 KB) for ultra-fast loading</div>'
    + '</div>'

    + '<label>Full Name*<input name="name" id="memberFormName" required placeholder="e.g. Rahul Sharma" value="' + escapeHtml(m ? m.name : '') + '"></label>'
    + '<label>Phone Number*'
    + (editing && m && m.phone
        ? '<div class="input-with-btn"><input name="phone" required placeholder="10-digit number" value="' + escapeHtml(m ? m.phone : '') + '">'
          + '<button type="button" class="btn-tiny btn-whatsapp" data-action="whatsapp" data-phone="' + escapeHtml(m.phone) + '" data-name="' + escapeHtml(m.name) + '" title="WhatsApp pe chat karein">' + ICON_WHATSAPP + '<span>WhatsApp</span></button></div>'
        : '<input name="phone" required placeholder="10-digit mobile number" value="' + escapeHtml(m ? m.phone : '') + '">')
    + '</label>'
    + '<div class="form-row">'
    + '<label>Plan<select name="planType" id="planTypeSelect">'
    + Object.keys(PLAN_OPTIONS).map(function(k) {
        return '<option value="' + k + '"' + ((m && m.planType === k) ? ' selected' : '') + '>' + PLAN_OPTIONS[k].label + '</option>';
      }).join('')
    + '</select></label>'
    + '<label>Amount (₹)<input name="planAmount" type="number" min="0" value="' + (m ? m.planAmount : (PLAN_OPTIONS.monthly.amount != null ? PLAN_OPTIONS.monthly.amount : '')) + '"></label>'
    + '</div>'
    + '<div class="form-row">'
    + '<label>Plan Start Date<input name="planStart" type="date" id="planStartInput" value="' + (m ? m.planStart : today) + '"></label>'
    + '<label>Plan End Date<input name="planEnd" type="date" id="planEndInput" value="' + (m ? m.planEnd : '') + '"></label>'
    + '</div>'
    + '<label>Emergency Contact (Optional)<input name="emergencyContact" placeholder="Family / Friend contact" value="' + escapeHtml(m ? m.emergencyContact : '') + '"></label>'
    + '<div class="modal-actions">'
    + '<button type="button" class="btn-secondary" data-action="close-modal">Cancel</button>'
    + '<button type="submit" class="btn-primary">' + (editing ? 'Save Changes' : '+ Add Member') + '</button>'
    + '</div></form></div></div>';

  document.getElementById('modalRoot').innerHTML = html;

  var planTypeSel = document.getElementById('planTypeSelect');
  var planStartInp = document.getElementById('planStartInput');
  var planEndInp = document.getElementById('planEndInput');
  var amountInp = document.querySelector('#memberForm input[name="planAmount"]');
  var nameInp = document.getElementById('memberFormName');

  function recomputeEnd() {
    var pt = planTypeSel.value;
    if (PLAN_OPTIONS[pt]) {
      planEndInp.value = addMonthsStr(planStartInp.value || today, PLAN_OPTIONS[pt].months);
    }
  }
  if (!editing) recomputeEnd();

  planTypeSel.addEventListener('change', function() {
    recomputeEnd();
    var pt = planTypeSel.value;
    if (PLAN_OPTIONS[pt] && PLAN_OPTIONS[pt].amount != null) {
      amountInp.value = PLAN_OPTIONS[pt].amount;
    }
  });
  planStartInp.addEventListener('change', recomputeEnd);

  // Photo upload listeners
  var photoInput = document.getElementById('memberPhotoInput');
  var pickPhotoBtn = document.getElementById('modalPickPhotoBtn');
  var photoTrigger = document.getElementById('modalPhotoTrigger');
  var removePhotoBtn = document.getElementById('modalRemovePhotoBtn');

  function triggerPicker() {
    if (photoInput) photoInput.click();
  }

  if (pickPhotoBtn) pickPhotoBtn.addEventListener('click', triggerPicker);
  if (photoTrigger) photoTrigger.addEventListener('click', triggerPicker);

  if (photoInput) {
    photoInput.addEventListener('change', async function(e) {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        toast('Photo process & compress ho rahi hai...');
        var compressed = await compressImage(file, 320, 0.82);
        modalPhotoData = compressed;
        updateModalPhotoDisplay(modalPhotoData, nameInp.value || 'Member');
        toast('Photo successfully set ho gayi!');
      } catch (err) {
        console.error(err);
        toast('Photo upload mein error: ' + (err.message || err));
      }
    });
  }

  if (removePhotoBtn) {
    removePhotoBtn.addEventListener('click', function() {
      modalPhotoData = '';
      updateModalPhotoDisplay('', nameInp.value || 'Member');
      if (photoInput) photoInput.value = '';
      toast('Photo remove kar di gayi');
    });
  }

  if (nameInp) {
    nameInp.addEventListener('input', function() {
      if (!modalPhotoData) {
        updateModalPhotoDisplay('', nameInp.value);
      }
    });
  }
}

function openMemberDetailsModal(id) {
  var m = state.members.find(function(x) { return x.id === id; });
  if (!m) return;
  var st = getMemberStatus(m);
  var diff = daysUntil(m.planEnd);
  var statusText = st === 'active' ? (diff + ' Days Remaining') : (st === 'expiring' ? (diff + ' Days Left (Expiring Soon)') : (Math.abs(diff) + ' Days Overdue'));
  var validityText = st === 'active' ? (diff + ' din baaki') : (st === 'expiring' ? (diff + ' din baaki') : (Math.abs(diff) + ' din overdue'));

  var waMsg = '';
  if (st === 'expiring') {
    waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n'
      + GYM_NAME + ' se reminder: Aapka gym plan agle ' + diff + ' din mein (' + formatDate(m.planEnd) + ') expire ho raha hai. Kripya apna renewal samay par karwayein taaki workout mein koi break na aaye. Dhanyawad!\n\n— Team ' + GYM_NAME + ' 🏋️‍♂️';
  } else if (st === 'expired') {
    waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n'
      + GYM_NAME + ' se reminder: Aapka gym membership plan expire ho chuka hai (' + formatDate(m.planEnd) + '). Kripya apna renewal complete karwake regular workout jari rakhein. Dhanyawad!\n\n— Team ' + GYM_NAME + ' 🏋️‍♂️';
  } else {
    waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n'
      + GYM_NAME + ' mein aapka swagat hai! 💪\n\n'
      + 'Aapki membership details:\n'
      + '📋 Plan: ' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '\n'
      + '📅 Validity: ' + formatDate(m.planEnd) + ' tak (' + validityText + ')\n\n'
      + 'Regular workout karte rahein aur healthy rahein! Kisi bhi sawaal ya workout tips ke liye aap hume yahan message kar sakte hain.\n\n'
      + '— Team ' + GYM_NAME + ' 🏋️‍♂️';
  }

  var html = ''
    + '<div class="modal-overlay">'
    + '<div class="modal">'
    + '<div class="modal-header">'
    + '<div style="display:flex;align-items:center;gap:0.5rem;"><img src="logo.png" style="width:24px;height:24px;border-radius:4px;object-fit:contain;background:#000;"><span class="id-card-gym">' + GYM_NAME + '</span></div>'
    + '<button class="modal-close-btn" data-action="close-modal">&times;</button>'
    + '</div>'
    + '<div class="member-id-card">'
    + renderAvatar(m, 'avatar-xl', 'ring-' + st)
    + '<div class="id-card-name">' + escapeHtml(m.name) + '</div>'
    + '<div class="id-card-phone">' + ICON_PHONE + '<span>' + escapeHtml(m.phone) + '</span></div>'
    + '<div class="id-card-stats-box">'
    + '<div class="id-card-stat"><span class="id-card-stat-title">Membership Plan</span><span class="id-card-stat-val">' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '</span></div>'
    + '<div class="id-card-stat"><span class="id-card-stat-title">Fee Amount</span><span class="id-card-stat-val">' + formatCurrency(m.planAmount) + '</span></div>'
    + '<div class="id-card-stat"><span class="id-card-stat-title">Start Date</span><span class="id-card-stat-val">' + formatDate(m.planStart) + '</span></div>'
    + '<div class="id-card-stat"><span class="id-card-stat-title">Expiry Date</span><span class="id-card-stat-val">' + formatDate(m.planEnd) + '</span></div>'
    + '<div class="id-card-stat" style="grid-column: 1 / -1;"><span class="id-card-stat-title">Status</span><span class="id-card-stat-val"><span class="badge badge-' + st + '">' + statusText + '</span></span></div>'
    + (m.emergencyContact ? '<div class="id-card-stat" style="grid-column: 1 / -1;"><span class="id-card-stat-title">Emergency Contact</span><span class="id-card-stat-val">' + escapeHtml(m.emergencyContact) + '</span></div>' : '')
    + '</div>'
    + '<div style="display:flex;gap:0.6rem;width:100%;margin-bottom:0.8rem;">'
    + '<button class="btn-whatsapp" style="flex:1;" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '">' + ICON_WHATSAPP + '<span>WhatsApp Message</span></button>'
    + '<a href="tel:' + escapeHtml(m.phone) + '" class="btn-secondary" style="display:inline-flex;align-items:center;justify-content:center;padding:0.65rem 1rem;">' + ICON_PHONE + '</a>'
    + '</div>'
    + '<div style="display:flex;gap:0.6rem;width:100%;">'
    + '<button class="btn-primary" style="flex:1;" data-action="open-payment" data-id="' + m.id + '">+ Record Payment</button>'
    + '<button class="btn-secondary" data-action="edit-member" data-id="' + m.id + '">Edit</button>'
    + '</div>'
    + '</div>'
    + '</div></div>';

  document.getElementById('modalRoot').innerHTML = html;
}

function openPaymentModal(preselectId) {
  var today = todayStr();
  var sorted = state.members.slice().sort(function(a, b) { return a.name.localeCompare(b.name); });
  var preMember = preselectId ? state.members.find(function(m) { return m.id === preselectId; }) : null;
  var defaultAmount = '';
  var defaultRenew = 1;
  if (preMember) {
    defaultAmount = preMember.planAmount || (PLAN_OPTIONS[preMember.planType] && PLAN_OPTIONS[preMember.planType].amount != null ? PLAN_OPTIONS[preMember.planType].amount : '');
    defaultRenew = PLAN_OPTIONS[preMember.planType] ? PLAN_OPTIONS[preMember.planType].months : 1;
  }

  var html = ''
    + '<div class="modal-overlay">'
    + '<div class="modal">'
    + '<div class="modal-header">'
    + '<h2>Record Fee Payment</h2>'
    + '<button class="modal-close-btn" data-action="close-modal">&times;</button>'
    + '</div>'
    + '<form id="paymentForm">'
    + '<label>Select Member*<select name="memberId" id="payMemberSelect" required>'
    + '<option value="">-- Choose Member --</option>'
    + sorted.map(function(m) {
        return '<option value="' + m.id + '"' + (m.id === preselectId ? ' selected' : '') + '>' + escapeHtml(m.name) + ' (' + escapeHtml(m.phone) + ')</option>';
      }).join('')
    + '</select></label>'
    
    // Quick preview of selected member with photo
    + '<div id="payMemberPreview" style="' + (preMember ? 'display:flex;' : 'display:none;') + 'align-items:center;gap:0.75rem;padding:0.75rem;background:var(--bg-subtle);border-radius:var(--radius-md);margin-bottom:1rem;border:1px solid var(--border);">'
    + (preMember ? renderAvatar(preMember, 'avatar-sm') + '<div style="font-size:0.88rem;"><strong>' + escapeHtml(preMember.name) + '</strong><div style="font-size:0.75rem;color:var(--ink-muted);">Valid till: ' + formatDate(preMember.planEnd) + '</div></div>' : '')
    + '</div>'

    + '<div class="form-row">'
    + '<label>Amount (₹)*<input name="amount" id="payAmountInput" type="number" min="1" required value="' + defaultAmount + '"></label>'
    + '<label>Payment Date<input name="date" type="date" value="' + today + '"></label>'
    + '</div>'
    + '<div class="form-row">'
    // Only Online and Cash options as requested
    + '<label>Payment Method<select name="method"><option value="Online">Online</option><option value="Cash">Cash</option></select></label>'
    // Removed "Do Not Extend Validity" option as requested
    + '<label>Renew Membership<select name="renew" id="payRenewSelect">'
    + '<option value="1"' + (defaultRenew === 1 ? ' selected' : '') + '>Renew — 1 Month</option>'
    + '<option value="3"' + (defaultRenew === 3 ? ' selected' : '') + '>Renew — 3 Months</option>'
    + '<option value="6"' + (defaultRenew === 6 ? ' selected' : '') + '>Renew — 6 Months</option>'
    + '<option value="12"' + (defaultRenew === 12 ? ' selected' : '') + '>Renew — 12 Months</option>'
    + '</select></label>'
    + '</div>'
    + '<label>Note (Optional)<input name="note" placeholder="e.g. UPI Ref / GPay / Receipt note"></label>'
    + '<div class="modal-actions">'
    + '<button type="button" class="btn-secondary" data-action="close-modal">Cancel</button>'
    + '<button type="submit" class="btn-primary">Save Payment</button>'
    + '</div></form></div></div>';

  document.getElementById('modalRoot').innerHTML = html;

  var memSel = document.getElementById('payMemberSelect');
  var amtInp = document.getElementById('payAmountInput');
  var renewSel = document.getElementById('payRenewSelect');
  var previewBox = document.getElementById('payMemberPreview');

  memSel.addEventListener('change', function() {
    var m = state.members.find(function(x) { return x.id === memSel.value; });
    if (m) {
      if (m.planAmount) amtInp.value = m.planAmount;
      else if (PLAN_OPTIONS[m.planType] && PLAN_OPTIONS[m.planType].amount != null) amtInp.value = PLAN_OPTIONS[m.planType].amount;
      else amtInp.value = '';
      if (PLAN_OPTIONS[m.planType] && PLAN_OPTIONS[m.planType].months) {
        renewSel.value = String(PLAN_OPTIONS[m.planType].months);
      }
      previewBox.style.display = 'flex';
      previewBox.innerHTML = renderAvatar(m, 'avatar-sm') + '<div style="font-size:0.88rem;"><strong>' + escapeHtml(m.name) + '</strong><div style="font-size:0.75rem;color:var(--ink-muted);">Valid till: ' + formatDate(m.planEnd) + '</div></div>';
    } else {
      previewBox.style.display = 'none';
      previewBox.innerHTML = '';
    }
  });
}

/* ---------------- Shell & Navigation ---------------- */
function navButtonsHtml() {
  return NAV_ITEMS.map(function(n) {
    return '<button class="navitem" data-action="nav" data-view="' + n.view + '">'
      + n.icon + '<span>' + n.label + '</span></button>';
  }).join('');
}

function renderDemoBannerHtml() {
  if (!isDemo()) return '';
  var dismissed = false;
  try {
    dismissed = sessionStorage.getItem('tg_demo_banner_dismissed') === 'true';
  } catch (e) {}
  if (dismissed) return '';

  return '<div class="demo-banner" id="demoBanner">'
    + '<div class="demo-banner-content">'
    + '<span class="demo-banner-icon">ℹ️</span>'
    + '<span class="demo-banner-text">Ye demo hai — data sirf aapke browser mein save hota hai. Dusre device ya browser par ye data nahi dikhega.</span>'
    + '</div>'
    + '<button type="button" class="demo-banner-close" data-action="dismiss-banner" aria-label="Dismiss banner" title="Dismiss">&times;</button>'
    + '</div>';
}

function renderDashboardDevBar() {
  return '<div class="dash-footer-bar">'
    + '<div class="dash-footer-left">'
    + '<div class="dash-footer-avatar-wrap" data-action="open-dev-drawer" style="cursor:pointer;" title="Click for developer profile &amp; contact">'
    + '<img src="yuvraj.jpg" class="dash-footer-avatar" alt="Yuvraj" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-flex\';">'
    + '<span class="dash-footer-fallback" style="display:none;">Y</span>'
    + '<span class="dash-footer-dot" title="Available"></span>'
    + '</div>'
    + '<div class="dash-footer-text">'
    + '<div class="dash-footer-title">'
    + '<span>Designed &amp; Developed by <strong>Yuvraj</strong></span>'
    + '<span class="dash-footer-chip">Software Developer</span>'
    + '</div>'
    + '<p class="dash-footer-tagline">Helping businesses go digital &amp; solving operational problems.</p>'
    + '</div>'
    + '</div>'
    + '<div class="dash-footer-actions">'
    + '<a href="https://github.com/Yuvraj0880" target="_blank" rel="noopener noreferrer" class="btn-dash-footer btn-dash-gh" title="Check out my projects on GitHub">'
    + ICON_GITHUB
    + '<span>Check out my projects</span>'
    + '</a>'
    + '<a href="https://wa.me/917814336851?text=Hi%20Yuvraj,%20I%20saw%20your%20Gym%20Desk%20website!" target="_blank" rel="noopener noreferrer" class="btn-dash-footer btn-dash-wa" title="Direct WhatsApp Chat">'
    + ICON_WHATSAPP
    + '<span>WhatsApp</span>'
    + '</a>'
    + '<button type="button" class="btn-dash-footer btn-dash-drawer" data-action="open-dev-drawer" title="Full developer details &amp; contact">'
    + '<span>View Profile &amp; Contact ↗</span>'
    + '</button>'
    + '</div>'
    + '</div>';
}

function renderDevDrawerHtml() {
  return '<div id="devDrawerOverlay" class="dev-drawer-overlay" data-action="close-dev-drawer" aria-label="Close Developer Profile"></div>'
    + '<aside id="devDrawer" class="dev-drawer" aria-label="Developer Profile Drawer">'
    + '<div class="dev-drawer-header">'
    + '<div class="dev-drawer-header-title">'
    + '<span class="dev-drawer-subtitle">About The Developer</span>'
    + '<h3>Developer Profile</h3>'
    + '</div>'
    + '<button type="button" class="dev-drawer-close" data-action="close-dev-drawer" aria-label="Close Drawer" title="Close (Esc)">'
    + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    + '</button>'
    + '</div>'
    + '<div class="dev-drawer-body">'
    + '<div class="dev-drawer-hero">'
    + '<div class="dev-drawer-avatar-wrap">'
    + '<img src="yuvraj.jpg" class="dev-drawer-avatar" alt="Yuvraj" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">'
    + '<span class="dev-drawer-fallback" style="display:none;">Y</span>'
    + '<span class="dev-drawer-status-dot" title="Available for projects"></span>'
    + '</div>'
    + '<div class="dev-drawer-hero-info">'
    + '<div class="dev-drawer-badge"><span class="drawer-badge-dot"></span><span>Software &amp; Web Developer</span></div>'
    + '<h2 class="dev-drawer-name">Yuvraj</h2>'
    + '<p class="dev-drawer-motto">Helping businesses go digital &amp; solving operational problems.</p>'
    + '</div>'
    + '</div>'
    + '<div class="dev-drawer-section">'
    + '<h4 class="dev-section-title">Introduction</h4>'
    + '<p class="dev-section-p">'
    + 'I create clean, efficient, and user-friendly software solutions tailored for real-world business needs. From gym management portals and billing software to custom web apps and mobile PWAs — my focus is on solving daily operational friction and making business operations effortless.'
    + '</p>'
    + '</div>'
    + '<div class="dev-drawer-section">'
    + '<h4 class="dev-section-title">Key Capabilities Built Here</h4>'
    + '<div class="dev-caps-grid">'
    + '<div class="dev-cap-item"><span class="dev-cap-icon">📱</span><div><strong>Installable Mobile App (PWA)</strong><p>Phone par direct app ki tarah install hoti hai — quick single-tap access ke liye.</p></div></div>'
    + '<div class="dev-cap-item"><span class="dev-cap-icon">💬</span><div><strong>1-Click WhatsApp Reminders</strong><p>Instant dues alerts to members with prefilled details.</p></div></div>'
    + '<div class="dev-cap-item"><span class="dev-cap-icon">📊</span><div><strong>Cash vs Online Breakdown</strong><p>Clear monthly collection stats &amp; member history.</p></div></div>'
    + '<div class="dev-cap-item"><span class="dev-cap-icon">🔒</span><div><strong>One-Click CSV Backups</strong><p>Complete data security with single-click export.</p></div></div>'
    + '</div>'
    + '</div>'
    + '<div class="dev-drawer-section">'
    + '<h4 class="dev-section-title">Connect &amp; Projects</h4>'
    + '<div class="dev-contact-list">'
    + '<a href="https://wa.me/917814336851?text=Hi%20Yuvraj,%20I%20saw%20your%20Gym%20Desk%20website!" target="_blank" rel="noopener noreferrer" class="dev-contact-card card-wa" title="Direct WhatsApp Chat">'
    + '<div class="dev-contact-icon wa">' + ICON_WHATSAPP + '</div>'
    + '<div class="dev-contact-text">'
    + '<div class="dev-contact-head"><span class="dev-contact-type">WhatsApp</span><span class="dev-contact-status">Online</span></div>'
    + '<div class="dev-contact-val">+91 78143 36851</div>'
    + '<div class="dev-contact-sub">Click to start direct chat</div>'
    + '</div>'
    + '<span class="dev-contact-arrow">↗</span>'
    + '</a>'
    + '<a href="https://github.com/Yuvraj0880" target="_blank" rel="noopener noreferrer" class="dev-contact-card card-gh" title="GitHub Profile">'
    + '<div class="dev-contact-icon gh">' + ICON_GITHUB + '</div>'
    + '<div class="dev-contact-text">'
    + '<div class="dev-contact-head"><span class="dev-contact-type">GitHub</span><span class="dev-contact-status dev-status-code">Projects</span></div>'
    + '<div class="dev-contact-val">@Yuvraj0880</div>'
    + '<div class="dev-contact-sub">Check out my projects</div>'
    + '</div>'
    + '<span class="dev-contact-arrow">↗</span>'
    + '</a>'
    + '<a href="https://www.instagram.com/a_simple_insta_user?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="dev-contact-card card-ig" title="Connect on Instagram">'
    + '<div class="dev-contact-icon ig">' + ICON_INSTAGRAM + '</div>'
    + '<div class="dev-contact-text">'
    + '<div class="dev-contact-head"><span class="dev-contact-type">Instagram</span><span class="dev-contact-status dev-status-social">Connect</span></div>'
    + '<div class="dev-contact-val">@a_simple_insta_user</div>'
    + '<div class="dev-contact-sub">Follow for updates &amp; new builds</div>'
    + '</div>'
    + '<span class="dev-contact-arrow">↗</span>'
    + '</a>'
    + '</div>'
    + '</div>'
    + '<div class="dev-drawer-cta">'
    + '<p>Need custom business software, a billing app, or want to take your business digital?</p>'
    + '<a href="https://wa.me/917814336851?text=Hi%20Yuvraj,%20I%20saw%20your%20Gym%20Desk%20website%20and%20want%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" class="btn-drawer-cta">'
    + ICON_WHATSAPP + '<span>Discuss Your Project on WhatsApp</span>'
    + '</a>'
    + '</div>'
    + '</div>'
    + '</aside>';
}

function openDevDrawer() {
  var ov = document.getElementById('devDrawerOverlay');
  var dr = document.getElementById('devDrawer');
  if (ov && dr) {
    ov.classList.add('active');
    dr.classList.add('open');
    document.body.classList.add('drawer-open');
  }
}

function closeDevDrawer() {
  var ov = document.getElementById('devDrawerOverlay');
  var dr = document.getElementById('devDrawer');
  if (ov && dr) {
    dr.classList.remove('open');
    ov.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }
}

function initShell() {
  document.getElementById('app').innerHTML = ''
    + '<aside class="sidebar">'
    + '<div class="brand">'
    + '<img src="logo.png" class="sidebar-logo" alt="Gym Desk">'
    + '<div class="brand-info">'
    + '<span class="brand-title">' + GYM_NAME + '</span>'
    + '<span class="brand-subtitle">Fitness Management</span>'
    + '</div>'
    + '</div>'
    + '<nav class="navlist">' + navButtonsHtml() + '</nav>'
    + '<div class="sidebar-stats">'
    + '<div class="sidebar-stats-title">Active Members</div>'
    + '<div class="sidebar-stats-val"><b id="sidebarActiveCount">0</b><span>members</span></div>'
    + '</div>'
    + '<div class="sidebar-admin-footer">'
    + '<div class="sidebar-admin-info">'
    + '<span>Portal: <strong>Gym Desk</strong></span>'
    + '<span class="badge badge-active" style="font-size:0.68rem;padding:0.15rem 0.45rem;">Active</span>'
    + '</div>'
    + '<div class="sidebar-admin-creator" data-action="open-dev-drawer" style="cursor:pointer;" title="Click for developer info &amp; contact">'
    + '<div class="sidebar-creator-left">'
    + '<img src="yuvraj.jpg" class="sidebar-creator-avatar" alt="Yuvraj" onerror="this.style.display=\'none\'">'
    + '<span>Built by <strong>Yuvraj</strong></span>'
    + '</div>'
    + '<span class="sidebar-creator-badge">Info ℹ️</span>'
    + '</div>'
    + '<div class="sidebar-admin-btns">'
    + '<button class="btn-tiny" data-action="export-all-data" title="Single Click Full Backup (CSV)">' + ICON_DOWNLOAD + '<span>Backup (CSV)</span></button>'
    + '</div>'
    + '</div>'
    + '</aside>'
    + '<div class="mainwrap">'
    + renderDemoBannerHtml()
    // Clean Header with prominent Business Name, Action Buttons & Developer Pill
    + '<header class="topbar">'
    + '<div class="topbar-brand-clean">'
    + '<img src="logo.png" class="topbar-logo" alt="Gym Desk">'
    + '<div class="topbar-title-wrap">'
    + '<span class="topbar-gym-name">' + GYM_NAME + '</span>'
    + '<span class="topbar-gym-sub" id="viewSubtitle">Dashboard</span>'
    + '</div>'
    + '</div>'
    + '<div class="topbar-right">'
    + (isDemo() ? '<button class="btn-topbar-action btn-topbar-reset" data-action="reset-demo" title="Demo Data Reset Karein">'
    + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>'
    + '<span>Reset</span></button>' : '')
    + '<button class="btn-topbar-action btn-topbar-backup" data-action="export-all-data" title="Saara Gym Data Single Click Mein Backup Karein">'
    + ICON_DOWNLOAD + '<span>Backup</span>'
    + '</button>'
    + '<button type="button" class="topbar-dev-pill" data-action="open-dev-drawer" title="Built by Yuvraj — Click to view developer profile &amp; contact">'
    + '<div class="topbar-dev-avatar-wrap">'
    + '<img src="yuvraj.jpg" class="topbar-dev-avatar" alt="Yuvraj" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-block\';">'
    + '<span class="topbar-dev-fallback" style="display:none;">Y</span>'
    + '<span class="topbar-dev-dot" title="Available"></span>'
    + '</div>'
    + '<div class="topbar-dev-text">'
    + '<span class="topbar-dev-sub">Built by</span>'
    + '<span class="topbar-dev-name">Yuvraj</span>'
    + '</div>'
    + '<span class="topbar-dev-badge">Info ℹ️</span>'
    + '</button>'
    + '<div class="topbar-date">' + formatDate(todayStr()) + '</div>'
    + '</div>'
    + '</header>'
    + '<main id="main" class="main"><p class="empty-note">Loading Gym Desk…</p></main>'
    + '</div>'
    + '<nav class="bottomnav"><div class="navlist">' + navButtonsHtml() + '</div></nav>'
    + renderDevDrawerHtml();

  updateNavState();
}

function updateNavState() {
  document.querySelectorAll('[data-action="nav"]').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.view === currentView);
  });
  var subtitles = {
    dashboard: 'Dashboard',
    members: 'Members Directory',
    payments: 'Fee Records'
  };
  var sub = document.getElementById('viewSubtitle');
  if (sub) sub.textContent = subtitles[currentView] || 'Management Portal';

  var activeCountEl = document.getElementById('sidebarActiveCount');
  if (activeCountEl) {
    var actCount = state.members.filter(function(m) { return getMemberStatus(m) === 'active'; }).length;
    activeCountEl.textContent = actCount;
  }
}

/* ---------------- Render ---------------- */
function render() {
  updateNavState();
  var main = document.getElementById('main');
  if (!main) return;
  var content = '';
  if (currentView === 'dashboard') content = renderDashboard();
  else if (currentView === 'members') content = renderMembers();
  else if (currentView === 'payments') content = renderPayments();
  main.innerHTML = content;
}

function getMonthlyPaymentStats() {
  var ds = todayStr(), monthPrefix = ds.slice(0, 7);
  var thisMonthPayments = state.payments.filter(function(p) {
    return p.date && p.date.indexOf(monthPrefix) === 0;
  });

  var online = 0;
  var cash = 0;
  var onlineCount = 0;
  var cashCount = 0;

  thisMonthPayments.forEach(function(p) {
    var amt = Number(p.amount || 0);
    var meth = (p.method || '').toLowerCase().trim();
    if (meth === 'cash') {
      cash += amt;
      cashCount++;
    } else {
      // Online, UPI, etc.
      online += amt;
      onlineCount++;
    }
  });

  return {
    total: online + cash,
    online: online,
    cash: cash,
    totalCount: thisMonthPayments.length,
    onlineCount: onlineCount,
    cashCount: cashCount
  };
}

function renderDashboard() {
  var counts = { active: 0, expiring: 0, expired: 0 };
  state.members.forEach(function(m) {
    var st = getMemberStatus(m);
    if (counts[st] !== undefined) counts[st]++;
  });

  var payStats = getMonthlyPaymentStats();

  var expiringList = state.members.filter(function(m) { return getMemberStatus(m) === 'expiring'; })
    .sort(function(a, b) { return daysUntil(a.planEnd) - daysUntil(b.planEnd); });
  var duesList = state.members.filter(function(m) { return getMemberStatus(m) === 'expired'; })
    .sort(function(a, b) { return daysUntil(a.planEnd) - daysUntil(b.planEnd); });

  var months = [];
  for (var i = 5; i >= 0; i--) {
    var d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - i);
    var key = formatLocalDate(d).slice(0, 7);
    var label = d.toLocaleDateString('en-IN', { month: 'short' });
    var total = state.payments.filter(function(p) { return p.date && p.date.indexOf(key) === 0; })
      .reduce(function(s, p) { return s + Number(p.amount || 0); }, 0);
    months.push({ key: key, label: label, total: total });
  }
  var maxRev = Math.max(1, Math.max.apply(null, months.map(function(m) { return m.total; })));

  var html = '';
  // Stat Grid: Total Members, Active Members, Expiring This Week, Revenue This Month (with Online & Cash breakdown)
  html += '<div class="stat-grid">'
    + '<div class="stat-card stat-members"><div class="stat-header"><span class="stat-label">Total Members</span><div class="stat-icon">' + ICON_MEMBERS + '</div></div><div class="stat-num">' + state.members.length + '</div></div>'
    + '<div class="stat-card stat-active"><div class="stat-header"><span class="stat-label">Active Members</span><div class="stat-icon">💪</div></div><div class="stat-num">' + counts.active + '</div></div>'
    + '<div class="stat-card stat-expiring"><div class="stat-header"><span class="stat-label">Expiring This Week</span><div class="stat-icon">⚠️</div></div><div class="stat-num">' + counts.expiring + '</div></div>'
    + '<div class="stat-card stat-revenue">'
    + '<div class="stat-header"><span class="stat-label">Iss Mahine Ka Collection</span><div class="stat-icon">' + ICON_PAYMENTS + '</div></div>'
    + '<div class="stat-num">' + formatCurrency(payStats.total) + '</div>'
    + '<div class="split-stat-pills">'
    + '<span class="split-pill split-pill-online" title="Online Collection">📱 Online: ' + formatCurrency(payStats.online) + '</span>'
    + '<span class="split-pill split-pill-cash" title="Cash Collection">💵 Cash: ' + formatCurrency(payStats.cash) + '</span>'
    + '</div>'
    + '</div>'
    + '</div>';

  // Panels for Expiring & Pending Dues
  html += '<div class="panel-grid">';

  // Expiring List with Member Photos
  html += '<div class="panel">'
    + '<div class="panel-header"><h3>⚠️ Expiring This Week</h3><span class="panel-badge-count">' + expiringList.length + '</span></div>'
    + (expiringList.length
        ? '<ul class="mini-list">' + expiringList.map(function(m) {
            var diff = daysUntil(m.planEnd);
            var waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n' + GYM_NAME + ' se reminder: Aapka gym plan agle ' + diff + ' din mein (' + formatDate(m.planEnd) + ') expire ho raha hai. Kripya apna renewal samay par karwayein. Dhanyawad!\n\n— Team ' + GYM_NAME + ' 🏋️‍♂️';
            return '<li class="mini-item">'
              + renderAvatar(m, 'avatar-sm', 'ring-expiring')
              + '<div class="mini-info" data-action="view-member" data-id="' + m.id + '">'
              + '<div class="mini-name">' + escapeHtml(m.name) + '</div>'
              + '<div class="mini-sub"><span class="badge badge-expiring">' + diff + 'd left</span><span>' + formatDate(m.planEnd) + '</span></div>'
              + '</div>'
              + '<div class="mini-actions">'
              + '<button class="btn-tiny btn-whatsapp" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '" title="Send WhatsApp Reminder">' + ICON_WHATSAPP + '</button>'
              + '<button class="btn-tiny" data-action="open-payment" data-id="' + m.id + '">+ Pay</button>'
              + '</div></li>';
          }).join('') + '</ul>'
        : '<p class="empty-note">Koi member expire nahi ho raha is hafte.</p>')
    + '</div>';

  // Overdue Dues List with Member Photos
  html += '<div class="panel">'
    + '<div class="panel-header"><h3>🚨 Pending Dues / Overdue</h3><span class="panel-badge-count">' + duesList.length + '</span></div>'
    + (duesList.length
        ? '<ul class="mini-list">' + duesList.map(function(m) {
            var diff = Math.abs(daysUntil(m.planEnd));
            var waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n' + GYM_NAME + ' se reminder: Aapka gym plan expire ho chuka hai (' + formatDate(m.planEnd) + '). Kripya apna renewal complete karwake workout regular rakhein. Dhanyawad!\n\n— Team ' + GYM_NAME + ' 🏋️‍♂️';
            return '<li class="mini-item">'
              + renderAvatar(m, 'avatar-sm', 'ring-expired')
              + '<div class="mini-info" data-action="view-member" data-id="' + m.id + '">'
              + '<div class="mini-name">' + escapeHtml(m.name) + '</div>'
              + '<div class="mini-sub"><span class="badge badge-expired">' + diff + 'd overdue</span><span>' + formatDate(m.planEnd) + '</span></div>'
              + '</div>'
              + '<div class="mini-actions">'
              + '<button class="btn-tiny btn-whatsapp" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '" title="Send WhatsApp Reminder">' + ICON_WHATSAPP + '</button>'
              + '<button class="btn-tiny" data-action="open-payment" data-id="' + m.id + '">+ Pay</button>'
              + '</div></li>';
          }).join('') + '</ul>'
        : '<p class="empty-note">Koi overdue member nahi hai. Sab up-to-date hain!</p>')
    + '</div>';

  html += '</div>';

  // Revenue Chart
  html += '<div class="panel">'
    + '<div class="panel-header"><h3>📈 Monthly Revenue (Last 6 Months)</h3></div>'
    + '<div class="bar-chart">'
    + months.map(function(m) {
        var pct = Math.max(5, (m.total / maxRev) * 100);
        return '<div class="bar-col">'
          + '<div class="bar-value">' + (m.total > 0 ? formatCurrency(m.total) : '—') + '</div>'
          + '<div class="bar-track"><div class="bar" style="height:' + pct + '%"></div></div>'
          + '<div class="bar-label">' + m.label + '</div>'
          + '</div>';
      }).join('')
    + '</div></div>';

  html += renderDashboardDevBar();

  return html;
}

function renderMembers() {
  var list = state.members.slice();
  if (memberSearchQuery) {
    var q = memberSearchQuery.toLowerCase();
    list = list.filter(function(m) {
      return (m.name || '').toLowerCase().indexOf(q) !== -1 || (m.phone || '').indexOf(q) !== -1;
    });
  }
  if (memberStatusFilter !== 'all') {
    list = list.filter(function(m) { return getMemberStatus(m) === memberStatusFilter; });
  }
  list.sort(function(a, b) { return a.name.localeCompare(b.name); });

  var html = '';
  html += '<div class="toolbar">'
    + '<button class="btn-primary" data-action="open-add-member">+ Add New Member</button>'
    + '<div class="search-wrap">'
    + '<span class="search-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>'
    + '<input type="search" id="memberSearchInput" placeholder="Search by name or phone…" value="' + escapeHtml(memberSearchQuery) + '">'
    + '</div>'
    + '<select id="memberStatusFilterSelect" style="width:auto;min-width:140px;">'
    + '<option value="all"' + (memberStatusFilter === 'all' ? ' selected' : '') + '>All Status (' + state.members.length + ')</option>'
    + '<option value="active"' + (memberStatusFilter === 'active' ? ' selected' : '') + '>Active</option>'
    + '<option value="expiring"' + (memberStatusFilter === 'expiring' ? ' selected' : '') + '>Expiring Soon</option>'
    + '<option value="expired"' + (memberStatusFilter === 'expired' ? ' selected' : '') + '>Expired</option>'
    + '</select>'
    + '<button type="button" class="btn-secondary btn-tiny" data-action="export-members-csv" title="Export Members as CSV">' + ICON_DOWNLOAD + '<span>Members CSV</span></button>'
    + '<button type="button" class="btn-secondary btn-tiny" data-action="export-all-data" title="Full Backup of Gym Data">' + ICON_DOWNLOAD + '<span>Backup All</span></button>'
    + '<div class="view-toggle">'
    + '<button type="button" class="btn-toggle ' + (memberViewMode === 'grid' ? 'active' : '') + '" data-action="set-view-mode" data-mode="grid" title="Card View">' + ICON_GRID + '<span>Cards</span></button>'
    + '<button type="button" class="btn-toggle ' + (memberViewMode === 'table' ? 'active' : '') + '" data-action="set-view-mode" data-mode="table" title="Table View">' + ICON_LIST + '<span>Table</span></button>'
    + '</div>'
    + '</div>';

  if (!list.length) {
    html += '<div class="panel"><p class="empty-note">Koi member nahi mila. ' + (memberSearchQuery ? 'Search filter clear karein.' : 'Naya member add karein.') + '</p></div>';
    return html;
  }

  if (memberViewMode === 'grid') {
    // Beautiful Responsive Card Grid
    html += '<div class="member-grid">';
    html += list.map(function(m) {
      var st = getMemberStatus(m);
      var diff = daysUntil(m.planEnd);
      var validityText = st === 'active' ? (diff + ' din baaki') : (st === 'expiring' ? (diff + ' din baaki') : (Math.abs(diff) + ' din overdue'));
      
      // Professional, friendly Hinglish welcome message
      var waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n'
        + GYM_NAME + ' mein aapka swagat hai! 💪\n\n'
        + 'Aapki membership details:\n'
        + '📋 Plan: ' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '\n'
        + '📅 Validity: ' + formatDate(m.planEnd) + ' tak (' + validityText + ')\n\n'
        + 'Regular workout karte rahein aur healthy rahein! Kisi bhi sawaal ya guidance ke liye aap hume yahan message kar sakte hain.\n\n'
        + '— Team ' + GYM_NAME + ' 🏋️‍♂️';

      return '<div class="member-card">'
        + '<div class="member-card-top">'
        + '<div class="member-card-avatar-wrap" data-action="view-member" data-id="' + m.id + '">'
        + renderAvatar(m, 'avatar-lg', 'ring-' + st)
        + '</div>'
        + '<div class="member-card-details">'
        + '<div class="member-card-name" data-action="view-member" data-id="' + m.id + '">' + escapeHtml(m.name) + '</div>'
        + '<div class="member-card-phone">'
        + '<button type="button" class="phone-wa-btn" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '" title="WhatsApp chat kholo">' + ICON_WHATSAPP + '</button>'
        + '<a href="tel:' + escapeHtml(m.phone) + '" class="phone-call-btn" title="Call Member">' + ICON_PHONE + '</a>'
        + '<span>' + escapeHtml(m.phone) + '</span>'
        + '</div>'
        + '<div style="margin-top:0.4rem;">'
        + '<span class="badge badge-' + st + '">' + statusLabel(st) + ' (' + (st === 'active' ? diff + 'd left' : (st === 'expiring' ? diff + 'd left' : Math.abs(diff) + 'd overdue')) + ')</span>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="member-card-meta">'
        + '<div class="meta-item"><span class="meta-label">Plan</span><span class="meta-val">' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '</span></div>'
        + '<div class="meta-item"><span class="meta-label">Fee</span><span class="meta-val">' + formatCurrency(m.planAmount) + '</span></div>'
        + '<div class="meta-item"><span class="meta-label">Valid Till</span><span class="meta-val">' + formatDate(m.planEnd) + '</span></div>'
        + '</div>'
        + '<div class="member-card-actions">'
        + '<div class="member-card-actions-left">'
        + '<button class="btn-tiny btn-whatsapp" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '">' + ICON_WHATSAPP + '<span>WhatsApp</span></button>'
        + '<button class="btn-tiny" data-action="open-payment" data-id="' + m.id + '">+ Pay</button>'
        + '</div>'
        + '<div style="display:flex;gap:0.35rem;">'
        + '<button class="btn-tiny" data-action="edit-member" data-id="' + m.id + '">Edit</button>'
        + '<button class="btn-tiny btn-danger" data-action="delete-member" data-id="' + m.id + '">Delete</button>'
        + '</div>'
        + '</div>'
        + '</div>';
    }).join('');
    html += '</div>';
  } else {
    // Spreadsheet Table View
    html += '<div class="table-wrap"><table class="data-table"><thead><tr>'
      + '<th>Member</th><th>Phone & WhatsApp</th><th>Plan</th><th>Expiry Date</th><th>Status</th><th>Actions</th>'
      + '</tr></thead><tbody>';
    html += list.map(function(m) {
      var st = getMemberStatus(m);
      var diff = daysUntil(m.planEnd);
      var validityText = st === 'active' ? (diff + ' din baaki') : (st === 'expiring' ? (diff + ' din baaki') : (Math.abs(diff) + ' din overdue'));

      var waMsg = 'Namaste ' + m.name + ' ji! 🙏\n\n'
        + GYM_NAME + ' mein aapka swagat hai! 💪\n\n'
        + 'Aapki membership details:\n'
        + '📋 Plan: ' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '\n'
        + '📅 Validity: ' + formatDate(m.planEnd) + ' tak (' + validityText + ')\n\n'
        + 'Regular workout karte rahein aur healthy rahein!\n\n'
        + '— Team ' + GYM_NAME + ' 🏋️‍♂️';

      return '<tr>'
        + '<td><div class="member-cell" data-action="view-member" data-id="' + m.id + '" style="cursor:pointer;">'
        + renderAvatar(m, 'avatar-sm', 'ring-' + st)
        + '<div class="member-cell-info"><strong>' + escapeHtml(m.name) + '</strong>' + (m.emergencyContact ? '<span>Emerg: ' + escapeHtml(m.emergencyContact) + '</span>' : '') + '</div>'
        + '</div></td>'
        + '<td><span class="phone-cell"><button type="button" class="phone-wa-btn" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '" title="WhatsApp">' + ICON_WHATSAPP + '</button><span>' + escapeHtml(m.phone) + '</span></span></td>'
        + '<td><span class="badge badge-plan">' + (PLAN_OPTIONS[m.planType] ? PLAN_OPTIONS[m.planType].label : m.planType) + '</span></td>'
        + '<td>' + formatDate(m.planEnd) + '</td>'
        + '<td><span class="badge badge-' + st + '">' + statusLabel(st) + '</span></td>'
        + '<td class="row-actions">'
        + '<button class="btn-tiny btn-whatsapp" data-action="whatsapp-custom" data-phone="' + escapeHtml(m.phone) + '" data-msg="' + escapeHtml(waMsg) + '">' + ICON_WHATSAPP + '</button>'
        + '<button class="btn-tiny" data-action="open-payment" data-id="' + m.id + '">Pay</button>'
        + '<button class="btn-tiny" data-action="edit-member" data-id="' + m.id + '">Edit</button>'
        + '<button class="btn-tiny btn-danger" data-action="delete-member" data-id="' + m.id + '">Delete</button>'
        + '</td></tr>';
    }).join('');
    html += '</tbody></table></div>';
  }

  return html;
}

function renderPayments() {
  // Extract all distinct months from payments + current month
  var curMonth = todayStr().slice(0, 7);
  var monthsMap = {};
  monthsMap[curMonth] = true;
  state.payments.forEach(function(p) {
    if (p.date && p.date.length >= 7) {
      monthsMap[p.date.slice(0, 7)] = true;
    }
  });
  var allMonths = Object.keys(monthsMap).sort().reverse();

  // Apply month filter if selected
  var list = state.payments.slice();
  if (paymentMonthFilter) {
    list = list.filter(function(p) {
      return p.date && p.date.indexOf(paymentMonthFilter) === 0;
    });
  }
  list.sort(function(a, b) { return (b.date || '').localeCompare(a.date || ''); });

  // Calculate metrics for current filtered view
  var online = 0;
  var cash = 0;
  var onlineCount = 0;
  var cashCount = 0;

  list.forEach(function(p) {
    var amt = Number(p.amount || 0);
    var meth = (p.method || '').toLowerCase().trim();
    if (meth === 'cash') {
      cash += amt;
      cashCount++;
    } else {
      online += amt;
      onlineCount++;
    }
  });
  var total = online + cash;

  var html = '';

  // Dedicated Collection Metrics Section: Total, Online, Cash
  html += '<div class="payment-metrics-grid">'
    + '<div class="payment-metric-card metric-total">'
    + '<div class="metric-icon">💰</div>'
    + '<div class="metric-body">'
    + '<span class="metric-label">' + (paymentMonthFilter ? formatMonthDisplay(paymentMonthFilter) + ' Ka Collection' : 'Overall Total Collection') + '</span>'
    + '<span class="metric-value">' + formatCurrency(total) + '</span>'
    + '<span class="metric-count">' + list.length + ' payments ' + (paymentMonthFilter ? 'in ' + formatMonthDisplay(paymentMonthFilter) : 'all time') + '</span>'
    + '</div>'
    + '</div>'
    + '<div class="payment-metric-card metric-online">'
    + '<div class="metric-icon">📱</div>'
    + '<div class="metric-body">'
    + '<span class="metric-label">Online Collection</span>'
    + '<span class="metric-value">' + formatCurrency(online) + '</span>'
    + '<span class="metric-count">' + onlineCount + ' online payments</span>'
    + '</div>'
    + '</div>'
    + '<div class="payment-metric-card metric-cash">'
    + '<div class="metric-icon">💵</div>'
    + '<div class="metric-body">'
    + '<span class="metric-label">Cash Collection</span>'
    + '<span class="metric-value">' + formatCurrency(cash) + '</span>'
    + '<span class="metric-count">' + cashCount + ' cash payments</span>'
    + '</div>'
    + '</div>'
    + '</div>';

  // Toolbar with Month Filter, Record Payment, and CSV Backup Buttons
  html += '<div class="toolbar">'
    + '<button class="btn-primary" data-action="open-payment">+ Record Payment</button>'
    + '<div class="filter-group-wrap">'
    + '<div class="month-filter-box">'
    + '<span style="font-size:0.8rem;color:var(--ink-muted);font-weight:600;">📅 Month:</span>'
    + '<select id="paymentMonthSelect">'
    + '<option value=""' + (paymentMonthFilter === '' ? ' selected' : '') + '>All Months (Saare Records - ' + state.payments.length + ')</option>'
    + allMonths.map(function(m) {
        var isCur = (m === curMonth);
        return '<option value="' + m + '"' + (paymentMonthFilter === m ? ' selected' : '') + '>'
          + formatMonthDisplay(m) + (isCur ? ' (Current Month)' : '')
          + '</option>';
      }).join('')
    + '</select>'
    + '</div>'
    + (paymentMonthFilter
        ? '<button type="button" class="btn-tiny" data-action="clear-month-filter">✖ Show All</button>'
        : '<button type="button" class="btn-tiny" data-action="set-this-month">📅 This Month</button>')
    + '</div>'
    + '<div style="margin-left:auto;display:flex;gap:0.4rem;flex-wrap:wrap;">'
    + '<button type="button" class="btn-secondary btn-tiny" data-action="export-payments-csv" title="Export Payments Data as CSV">' + ICON_DOWNLOAD + '<span>Payments CSV</span></button>'
    + '<button type="button" class="btn-secondary btn-tiny" data-action="export-all-data" title="Full Backup of Gym Data">' + ICON_DOWNLOAD + '<span>Backup All</span></button>'
    + '</div>'
    + '</div>';

  html += '<div class="table-wrap"><table class="data-table"><thead><tr>'
    + '<th>Date</th><th>Member Photo & Name</th><th>Amount</th><th>Method</th><th>Note / Ref</th><th>Receipt</th><th>Actions</th>'
    + '</tr></thead><tbody>';

  if (list.length) {
    html += list.map(function(p) {
      var member = state.members.find(function(m) { return m.id === p.memberId || m.name.toLowerCase() === (p.memberName || '').toLowerCase(); });
      var waMsg = 'Receipt - ' + GYM_NAME + '\n\nMember: ' + (p.memberName || 'Member') + '\nAmount Received: ' + formatCurrency(p.amount) + '\nPayment Method: ' + (p.method || 'Online') + '\nDate: ' + formatDate(p.date) + '\n\nThank you for choosing ' + GYM_NAME + '! 💪🏋️‍♂️';
      var isOnline = (p.method || '').toLowerCase() !== 'cash';

      return '<tr>'
        + '<td>' + formatDate(p.date) + '</td>'
        + '<td><div class="member-cell">'
        + renderAvatar(member, 'avatar-xs')
        + '<strong>' + escapeHtml(p.memberName || '—') + '</strong>'
        + '</div></td>'
        + '<td><b style="color:var(--accent);">' + formatCurrency(p.amount) + '</b></td>'
        + '<td><span class="badge ' + (isOnline ? 'badge-active' : 'badge-expiring') + '">' + (isOnline ? '📱 Online' : '💵 Cash') + '</span></td>'
        + '<td>' + escapeHtml(p.note || '—') + '</td>'
        + '<td>'
        + (member && member.phone
            ? '<button class="btn-tiny btn-whatsapp" data-action="whatsapp-custom" data-phone="' + escapeHtml(member.phone) + '" data-msg="' + escapeHtml(waMsg) + '" title="Share Receipt on WhatsApp">' + ICON_WHATSAPP + '<span>Receipt</span></button>'
            : '<span style="color:var(--ink-muted);font-size:0.8rem;">—</span>')
        + '</td>'
        + '<td class="row-actions">'
        + '<button class="btn-tiny" data-action="edit-payment" data-id="' + p.id + '" title="Payment Edit Karein">✏️ Edit</button>'
        + '<button class="btn-tiny btn-danger" data-action="delete-payment" data-id="' + p.id + '" title="Payment Delete Karein">🗑️ Delete</button>'
        + '</td></tr>';
    }).join('');
  } else {
    html += '<tr><td colspan="7" class="empty-note">'
      + (paymentMonthFilter
          ? 'Is mahine (' + formatMonthDisplay(paymentMonthFilter) + ') mein koi payment record nahi mili. <button class="btn-tiny" data-action="clear-month-filter" style="margin-left:0.5rem;">Show All Months</button>'
          : 'Abhi tak koi payment record nahi hui.')
      + '</td></tr>';
  }

  html += '</tbody></table></div>';
  return html;
}

/* ---------------- Event Listeners ---------------- */
document.addEventListener('click', function(e) {
  if (e.target.classList && e.target.classList.contains('modal-overlay')) {
    closeModal();
    return;
  }
  var btn = e.target.closest('[data-action]');
  if (!btn) return;
  var action = btn.dataset.action;

  if (action === 'nav') {
    currentView = btn.dataset.view;
    closeModal();
    render();
  } else if (action === 'open-add-member') {
    openMemberModal(null);
  } else if (action === 'edit-member') {
    openMemberModal(btn.dataset.id);
  } else if (action === 'view-member') {
    openMemberDetailsModal(btn.dataset.id);
  } else if (action === 'delete-member') {
    removeMember(btn.dataset.id);
  } else if (action === 'open-payment') {
    openPaymentModal(btn.dataset.id || null);
  } else if (action === 'edit-payment') {
    openEditPaymentModal(btn.dataset.id);
  } else if (action === 'delete-payment') {
    removePayment(btn.dataset.id);
  } else if (action === 'close-modal') {
    closeModal();
  } else if (action === 'set-view-mode') {
    memberViewMode = btn.dataset.mode;
    render();
  } else if (action === 'whatsapp') {
    e.preventDefault();
    openWhatsApp(btn.dataset.phone, btn.dataset.name);
  } else if (action === 'whatsapp-custom') {
    e.preventDefault();
    openWhatsApp(btn.dataset.phone, null, btn.dataset.msg);
  } else if (action === 'load-demo') {
    loadDemoData();
  } else if (action === 'export-all-data') {
    exportAllGymData();
  } else if (action === 'export-members-csv') {
    exportMembersCsv();
  } else if (action === 'export-payments-csv') {
    exportPaymentsCsv();
  } else if (action === 'reset-demo') {
    resetDemoData();
  } else if (action === 'dismiss-banner') {
    try {
      sessionStorage.setItem('tg_demo_banner_dismissed', 'true');
    } catch (e) {}
    var banner = document.getElementById('demoBanner');
    if (banner) banner.remove();
  } else if (action === 'set-this-month') {
    paymentMonthFilter = todayStr().slice(0, 7);
    render();
  } else if (action === 'clear-month-filter') {
    paymentMonthFilter = '';
    render();
  } else if (action === 'open-dev-drawer') {
    e.preventDefault();
    openDevDrawer();
  } else if (action === 'close-dev-drawer') {
    e.preventDefault();
    closeDevDrawer();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeDevDrawer();
    closeModal();
  }
});

document.addEventListener('submit', function(e) {
  if (e.target.id === 'memberForm') {
    e.preventDefault();
    var f = e.target;
    var id = f.dataset.editId;
    var data = {
      name: f.name.value.trim(),
      phone: f.phone.value.trim(),
      photoUrl: modalPhotoData || '',
      planType: f.planType.value,
      planAmount: Number(f.planAmount.value) || 0,
      planStart: f.planStart.value,
      planEnd: f.planEnd.value,
      emergencyContact: f.emergencyContact.value.trim()
    };
    if (!data.name || !data.phone) {
      toast('Member ka name aur phone number zaroori hai');
      return;
    }
    if (id) editMember(id, data); else addMember(data);
    closeModal();
  } else if (e.target.id === 'paymentForm') {
    e.preventDefault();
    var f2 = e.target;
    var memberId = f2.memberId.value;
    var member = state.members.find(function(m) { return m.id === memberId; });
    if (!member) {
      toast('Pehle ek member select karein');
      return;
    }
    var pdata = {
      memberId: memberId,
      memberName: member.name,
      amount: Number(f2.amount.value) || 0,
      date: f2.date.value || todayStr(),
      method: f2.method.value,
      note: f2.note.value.trim()
    };
    var renew = Number(f2.renew.value) || 1;
    addPayment(pdata, renew);
    closeModal();
  } else if (e.target.id === 'editPaymentForm') {
    e.preventDefault();
    var f3 = e.target;
    var pid = f3.dataset.paymentId;
    var memId = f3.memberId.value;
    var mem = state.members.find(function(m) { return m.id === memId; });
    var pdata = {
      memberId: memId || null,
      memberName: mem ? mem.name : (state.payments.find(function(p){ return p.id === pid; }) ? state.payments.find(function(p){ return p.id === pid; }).memberName : 'Member'),
      amount: Number(f3.amount.value) || 0,
      date: f3.date.value || todayStr(),
      method: f3.method.value,
      note: f3.note.value.trim()
    };
    editPayment(pid, pdata);
    closeModal();
  }
});

document.addEventListener('input', function(e) {
  if (e.target.id === 'memberSearchInput') {
    memberSearchQuery = e.target.value;
    var cursorPos = e.target.selectionStart;
    render();
    var newInput = document.getElementById('memberSearchInput');
    if (newInput) {
      newInput.focus();
      newInput.setSelectionRange(cursorPos, cursorPos);
    }
  }
});

document.addEventListener('change', function(e) {
  if (e.target.id === 'memberStatusFilterSelect') {
    memberStatusFilter = e.target.value;
    render();
  } else if (e.target.id === 'paymentMonthSelect') {
    paymentMonthFilter = e.target.value;
    render();
  }
});

/* ---------------- Demo Mode & Reset ---------------- */
function resetDemoData() {
  if (!confirm('Demo data reset karein? Sabhi changes hat jayenge aur sample data wapas load ho jayega.')) return;
  try {
    localStorage.removeItem(DEMO_STORAGE_MEMBERS_KEY);
    localStorage.removeItem(DEMO_STORAGE_PAYMENTS_KEY);
  } catch (e) {
    console.warn('Error clearing demo localStorage', e);
  }
  var initial = getInitialDemoData();
  state.members = initial.members;
  state.payments = initial.payments;
  storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
  storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
  render();
  toast('Demo data reset ho gaya!');
}

function loadDemoData() {
  var initial = getInitialDemoData();
  state.members = initial.members;
  state.payments = initial.payments;
  storageWrite(DEMO_STORAGE_MEMBERS_KEY, state.members);
  storageWrite(DEMO_STORAGE_PAYMENTS_KEY, state.payments);
  toast('Demo mode active: ' + GYM_NAME + ' sample data loaded!');
  render();
}

/* ---------------- Boot ---------------- */
function boot() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
      console.log(GYM_NAME + ' ServiceWorker active', reg.scope);
    }).catch(function(err) {
      console.warn('SW error', err);
    });
  }

  if (!isDemo() && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined' && SUPABASE_URL.indexOf('YOUR_') !== 0 && window.supabase) {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  initShell();
  if (isDemo()) {
    loadAll();
  } else if (sb) {
    loadAll();
  } else {
    document.getElementById('main').innerHTML = '<div class="panel"><h3>Setup Guide — Supabase Connection</h3>'
      + '<p class="empty-note">Live database connect karne ke liye <code>config.js</code> file mein apna Supabase Project URL aur anon key daalo.</p>'
      + '<div style="margin-top:1.2rem;display:flex;gap:0.8rem;align-items:center;flex-wrap:wrap;">'
      + '<button class="btn-primary" data-action="load-demo">▶ Preview With Demo Data (Sample Members & Photos Test Karein)</button>'
      + '</div></div>';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
