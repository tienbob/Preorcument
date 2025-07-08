// Sample request data for demonstration
const requestData = {
    'REQ-103405': {
        id: 'REQ-103405',
        date: '2025-02-15',
        product: 'Dell OptiPlex 7090',
        category: 'IT Equipment',
        priority: 'High',
        quantity: '3',
        cost: '$2,400.00',
        department: 'IT',
        requester: 'John Smith',
        status: 'Pending',
        approvalDate: 'Pending',
        deliveryDate: 'TBD',
        description: 'High-performance desktop computers for the development team',
        justification: 'Current computers are outdated and affecting productivity'
    },
    'REQ-103398': {
        id: 'REQ-103398',
        date: '2025-02-14',
        product: 'Adobe Creative Suite License',
        category: 'IT Software',
        priority: 'Medium',
        quantity: '5',
        cost: '$1,250.00',
        department: 'Marketing',
        requester: 'Sarah Johnson',
        status: 'Approved',
        approvalDate: '2025-02-15',
        deliveryDate: '2025-02-22',
        description: 'Annual license renewal for Creative Suite software',
        justification: 'Required for ongoing marketing campaigns and design work',
        documents: [
            { name: 'Request Form', type: 'PDF', size: '125 KB', description: 'Original purchase request form', created: 'Feb 14, 2025', status: 'completed' }
        ]
    },
    'REQ-103387': {
        id: 'REQ-103387',
        date: '2025-02-13',
        product: 'Office Chair Set',
        category: 'Office Supplies',
        priority: 'Low',
        quantity: '12',
        cost: '$3,600.00',
        department: 'HR',
        requester: 'Michael Brown',
        status: 'Approved',
        approvalDate: '2025-02-14',
        deliveryDate: '2025-02-25',
        description: 'Ergonomic office chairs for HR department',
        justification: 'Current chairs are causing employee discomfort',
        documents: [
            { name: 'Request Form', type: 'PDF', size: '130 KB', description: 'Original purchase request form', created: 'Feb 13, 2025', status: 'completed' },
            { name: 'Advance Payment Request', type: 'PDF', size: '145 KB', description: 'Advance payment request form', created: 'Feb 13, 2025', status: 'pending' }
        ]
    },
    'REQ-103301': {
        id: 'REQ-103301',
        date: '2025-02-10',
        product: 'Industrial Safety Equipment',
        category: 'Manufacturing Equipment',
        priority: 'Urgent',
        quantity: '25',
        cost: '$5,800.00',
        department: 'Production',
        requester: 'Robert Wilson',
        status: 'Ordered',
        approvalDate: '2025-02-11',
        deliveryDate: '2025-02-20',
        description: 'Safety equipment for production line workers',
        justification: 'Required for compliance and worker safety',
        documents: [
            { name: 'Purchase Order', type: 'PDF', size: '145 KB', description: 'Official purchase order document', created: 'Feb 15, 2025', status: 'completed' },
            { name: 'Supplier Quote', type: 'PDF', size: '180 KB', description: 'Approved supplier quotation', created: 'Feb 12, 2025', status: 'completed' },
            { name: 'Contract Agreement', type: 'PDF', size: '220 KB', description: 'Signed purchase contract', created: 'Feb 16, 2025', status: 'pending' },
            { name: 'Advance Payment Settlement', type: 'PDF', size: '165 KB', description: 'Advance payment settlement document', created: 'Feb 17, 2025', status: 'completed' }
        ]
    },
    'REQ-103212': {
        id: 'REQ-103212',
        date: '2025-02-03',
        product: 'Conference Room Display',
        category: 'IT Equipment',
        priority: 'Medium',
        quantity: '2',
        cost: '$4,200.00',
        department: 'Operations',
        requester: 'Emily Davis',
        status: 'Delivered',
        approvalDate: '2025-02-04',
        deliveryDate: '2025-02-10',
        description: 'Large displays for conference rooms',
        justification: 'Improve meeting effectiveness and presentation quality',
        documents: [
            { name: 'Purchase Order', type: 'PDF', size: '165 KB', description: 'Official purchase order document', created: 'Feb 04, 2025', status: 'completed' },
            { name: 'Supplier Invoice', type: 'PDF', size: '280 KB', description: 'Invoice from supplier', created: 'Feb 08, 2025', status: 'completed' },
            { name: 'Delivery Receipt', type: 'PDF', size: '125 KB', description: 'Signed delivery receipt', created: 'Feb 10, 2025', status: 'completed' },
            { name: 'Installation Report', type: 'PDF', size: '190 KB', description: 'Technical installation report', created: 'Feb 10, 2025', status: 'completed' },
            { name: 'Warranty Certificate', type: 'PDF', size: '95 KB', description: 'Product warranty documentation', created: 'Feb 10, 2025', status: 'completed' }
        ]
    }
};

// Add reviewers data
const reviewersData = [
    {
        id: 'REV001',
        name: 'Dr. Sarah Mitchell',
        email: 'sarah.mitchell@company.com',
        department: 'Management',
        role: 'Director',
        avatar: 'SM',
        phone: '+1-555-0101',
        specialization: 'Strategic Planning'
    },
    {
        id: 'REV002',
        name: 'James Robertson',
        email: 'james.robertson@company.com',
        department: 'Finance',
        role: 'Senior Manager',
        avatar: 'JR',
        phone: '+1-555-0102',
        specialization: 'Financial Analysis'
    },
    {
        id: 'REV003',
        name: 'Maria Gonzalez',
        email: 'maria.gonzalez@company.com',
        department: 'HR',
        role: 'Manager',
        avatar: 'MG',
        phone: '+1-555-0103',
        specialization: 'Policy Review'
    },
    {
        id: 'REV004',
        name: 'David Chen',
        email: 'david.chen@company.com',
        department: 'IT',
        role: 'Team Lead',
        avatar: 'DC',
        phone: '+1-555-0104',
        specialization: 'Technical Documentation'
    },
    {
        id: 'REV005',
        name: 'Amanda Foster',
        email: 'amanda.foster@company.com',
        department: 'Operations',
        role: 'Senior Manager',
        avatar: 'AF',
        phone: '+1-555-0105',
        specialization: 'Process Optimization'
    },
    {
        id: 'REV006',
        name: 'Robert Kim',
        email: 'robert.kim@company.com',
        department: 'Legal',
        role: 'Director',
        avatar: 'RK',
        phone: '+1-555-0106',
        specialization: 'Contract Review'
    },
    {
        id: 'REV007',
        name: 'Lisa Thompson',
        email: 'lisa.thompson@company.com',
        department: 'Procurement',
        role: 'Manager',
        avatar: 'LT',
        phone: '+1-555-0107',
        specialization: 'Vendor Management'
    }
];

let selectedReviewer = null;
let currentRequestReviewer = null;

// Document Modal Logic
function initializeDocumentModal() {
    // Use event delegation for document buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.document-btn')) {
            e.preventDefault();
            e.stopPropagation();
            
            const button = e.target.closest('.document-btn');
            const requestId = button.getAttribute('data-id');
            
            showDocumentModal(requestId);
        }
    });
    
    // Initialize modal action buttons
    initializeModalActionButtons();
}

function initializeModalActionButtons() {
    // Modal-specific initialization if needed
}

function showDocumentModal(requestId) {
    try {
        // Get request data
        const requestDetails = requestData[requestId] || {};
        
        // Find the row to get current status
        const button = document.querySelector(`[data-id="${requestId}"].document-btn`);
        const row = button ? button.closest('tr') : null;
        let currentStatus = 'Unknown';
        
        if (row) {
            const statusCell = row.cells[9];
            const statusBadge = statusCell.querySelector('.status-badge');
            currentStatus = statusBadge ? statusBadge.textContent.trim() : 'Unknown';
        }
        
        // Populate modal header and info
        document.getElementById('documentModalLabel').innerHTML = `
            <i class="fas fa-file-alt me-2"></i>Documents - ${requestId}
        `;
        
        document.getElementById('docModalRequestId').textContent = requestId;
        document.getElementById('docModalProductName').textContent = requestDetails.product || 'N/A';
        document.getElementById('docModalRequestStatus').textContent = currentStatus;
        document.getElementById('docModalDepartment').textContent = requestDetails.department || 'N/A';
        
        // Update status badge styling
        const statusBadge = document.getElementById('docModalRequestStatus');
        statusBadge.className = `badge bg-light text-dark status-badge status-${currentStatus.toLowerCase()}`;
        
        // Load reviewer information
        loadReviewerInfo(requestDetails.reviewer);
        
        // Populate documents list
        populateDocumentsList(requestDetails.documents || [], currentStatus);
        
        // Update action buttons based on status
        updateModalActionButtons(currentStatus);
        
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('documentModal'));
        modal.show();
        
    } catch (error) {
        console.error('Error showing document modal:', error);
        showErrorAlert('Failed to load document information. Please try again.');
    }
}

function populateDocumentsList(documents, status) {
    const documentsContainer = document.getElementById('documentsContainer');
    const documentsCount = document.getElementById('documentsCount');
    
    // Update documents count
    documentsCount.textContent = documents.length;
    
    if (documents.length === 0) {
        documentsContainer.innerHTML = `
            <div class="card border-dashed">
                <div class="card-body text-center py-5">
                    <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
                    <h6 class="text-muted">No documents available</h6>
                    <p class="text-muted mb-0">Documents will appear here as they are uploaded or generated.</p>
                </div>
            </div>
        `;
        return;
    }
    
    let documentsHTML = '<div class="documents-list">';
    
    documents.forEach((doc, index) => {
        const statusIcon = doc.status === 'completed' ? 
            '<i class="fas fa-check-circle text-success"></i>' : 
            '<i class="fas fa-clock text-warning"></i>';
        
        const fileIcon = getFileIcon(doc.type);
        
        documentsHTML += `
            <div class="document-item card mb-3 border-0 shadow-sm">
                <div class="card-body p-3">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <div class="document-icon">
                                ${fileIcon}
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex justify-content-between align-items-start">
                                <div class="flex-grow-1">
                                    <h6 class="mb-1 fw-bold">${doc.name}</h6>
                                    <p class="mb-2 text-muted small">${doc.description}</p>
                                    <div class="d-flex align-items-center text-muted small">
                                        <span class="me-3">
                                            <i class="fas fa-file me-1"></i>${doc.type}, ${doc.size}
                                        </span>
                                        <span>
                                            <i class="fas fa-calendar me-1"></i>${doc.created}
                                        </span>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <div class="mb-2">${statusIcon}</div>
                                    <div class="btn-group" role="group">
                                        <button class="btn btn-sm btn-outline-primary" onclick="downloadDocument('${doc.name}')" title="Download">
                                            <i class="fas fa-download"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-secondary" onclick="viewDocument('${doc.name}')" title="Preview">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-sm btn-outline-danger" onclick="deleteDocument('${doc.name}')" title="Delete">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    documentsHTML += '</div>';
    documentsContainer.innerHTML = documentsHTML;
}

function updateModalActionButtons(status) {
    const actionButtonsContainer = document.getElementById('modalActionButtons');
    actionButtonsContainer.innerHTML = '';
    
    // Add buttons based on status
    const buttons = getStatusBasedButtons(status);
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = btn.className;
        button.innerHTML = btn.innerHTML;
        button.onclick = btn.onclick;
        actionButtonsContainer.appendChild(button);
    });
}

function getStatusBasedButtons(status) {
    const buttons = [];
    
    switch (status) {
        case 'Ordered':
            buttons.push(
                {
                    className: 'btn btn-outline-success me-2',
                    innerHTML: '<i class="fas fa-file-contract me-1"></i>Create Contract',
                    onclick: () => navigateToPage('contract_creation_form.html')
                },
                {
                    className: 'btn btn-outline-info me-2',
                    innerHTML: '<i class="fas fa-shopping-cart me-1"></i>Buy Contract',
                    onclick: () => navigateToPage('buy_contract_form.html')
                },
                {
                    className: 'btn btn-outline-warning me-2',
                    innerHTML: '<i class="fas fa-box-open me-1"></i>Complete TTBG',
                    onclick: () => navigateToPage('ttbg_form.html')
                },
                {
                    className: 'btn btn-outline-secondary me-2',
                    innerHTML: '<i class="fas fa-check-circle me-1"></i>HDMB Confirmation',
                    onclick: () => navigateToPage('hdmb_confirmation_page.html')
                },
                {
                    className: 'btn btn-outline-primary me-2',
                    innerHTML: '<i class="fas fa-file-invoice-dollar me-1"></i>Payment Request',
                    onclick: () => {
                        const requestId = document.getElementById('docModalRequestId')?.textContent;
                        if (requestId) {
                            const modal = bootstrap.Modal.getInstance(document.getElementById('documentModal'));
                            modal.hide();
                            setTimeout(() => {
                                window.location.href = `payment_request_form.html?requestId=${requestId}`;
                            }, 300);
                        }
                    }
                }
            );
            break;
        case 'Delivered':
            buttons.push(
                {
                    className: 'btn btn-outline-success me-2',
                    innerHTML: '<i class="fas fa-file-contract me-1"></i>View Contract',
                    onclick: () => navigateToPage('contract_creation_form.html')
                },
                {
                    className: 'btn btn-outline-info me-2',
                    innerHTML: '<i class="fas fa-shopping-cart me-1"></i>View Buy Contract',
                    onclick: () => navigateToPage('buy_contract_form.html')
                },
                {
                    className: 'btn btn-outline-warning me-2',
                    innerHTML: '<i class="fas fa-box-open me-1"></i>View TTBG',
                    onclick: () => navigateToPage('ttbg_form.html')
                },
                {
                    className: 'btn btn-outline-secondary me-2',
                    innerHTML: '<i class="fas fa-check-circle me-1"></i>View HDMB',
                    onclick: () => navigateToPage('hdmb_confirmation_page.html')
                },
                {
                    className: 'btn btn-outline-primary me-2',
                    innerHTML: '<i class="fas fa-file-invoice-dollar me-1"></i>View Payment Request',
                    onclick: () => {
                        const requestId = document.getElementById('docModalRequestId')?.textContent;
                        if (requestId) {
                            const modal = bootstrap.Modal.getInstance(document.getElementById('documentModal'));
                            modal.hide();
                            setTimeout(() => {
                                window.location.href = `payment_request_form.html?requestId=${requestId}`;
                            }, 300);
                        }
                    }
                },
                {
                    className: 'btn btn-outline-success me-2',
                    innerHTML: '<i class="fas fa-receipt me-1"></i>View Reimbursement',
                    onclick: () => {
                        const requestId = document.getElementById('docModalRequestId')?.textContent;
                        if (requestId) {
                            const modal = bootstrap.Modal.getInstance(document.getElementById('documentModal'));
                            modal.hide();
                            setTimeout(() => {
                                window.location.href = `advance_payment_request_form.html.html?requestId=${requestId}`;
                            }, 300);
                        }
                    }
                }
            );
            break;
    }
    
    return buttons;
}

// Reviewer functionality
function loadReviewerInfo(reviewerId) {
    const noReviewerSelected = document.getElementById('noReviewerSelected');
    const reviewerSelected = document.getElementById('reviewerSelected');
    
    if (reviewerId) {
        const reviewer = reviewersData.find(r => r.id === reviewerId);
        if (reviewer) {
            currentRequestReviewer = reviewer;
            displaySelectedReviewer(reviewer);
            noReviewerSelected.classList.add('d-none');
            reviewerSelected.classList.remove('d-none');
        }
    } else {
        currentRequestReviewer = null;
        noReviewerSelected.classList.remove('d-none');
        reviewerSelected.classList.add('d-none');
    }
}

function displaySelectedReviewer(reviewer) {
    document.getElementById('reviewerAvatar').textContent = reviewer.avatar;
    document.getElementById('reviewerName').textContent = reviewer.name;
    document.getElementById('reviewerEmail').textContent = reviewer.email;
}

function initializeReviewerSelection() {
    // Select reviewer button
    document.getElementById('selectReviewerBtn').addEventListener('click', function() {
        showReviewerSelectionModal();
    });
    
    // Change reviewer button
    document.getElementById('changeReviewerBtn').addEventListener('click', function() {
        showReviewerSelectionModal();
    });
    
    // Search functionality
    document.getElementById('reviewerSearch').addEventListener('input', function() {
        filterReviewers();
    });
    
    // Clear search
    document.getElementById('clearReviewerSearchBtn').addEventListener('click', function() {
        document.getElementById('reviewerSearch').value = '';
        filterReviewers();
    });
    
    // Filter functionality
    document.getElementById('reviewerDepartmentFilter').addEventListener('change', filterReviewers);
    document.getElementById('reviewerRoleFilter').addEventListener('change', filterReviewers);
    
    // Remove selected reviewer
    document.getElementById('removeSelectedReviewer').addEventListener('click', function() {
        selectedReviewer = null;
        document.getElementById('selectedReviewerSection').style.display = 'none';
        document.getElementById('assignReviewerBtn').disabled = true;
        updateReviewerCards();
    });
    
    // Assign reviewer button
    document.getElementById('assignReviewerBtn').addEventListener('click', function() {
        assignReviewer();
    });
}

function showReviewerSelectionModal() {
    // Reset modal state
    selectedReviewer = null;
    document.getElementById('selectedReviewerSection').style.display = 'none';
    document.getElementById('assignReviewerBtn').disabled = true;
    document.getElementById('reviewerSearch').value = '';
    document.getElementById('reviewerDepartmentFilter').value = '';
    document.getElementById('reviewerRoleFilter').value = '';
    document.getElementById('reviewerNotes').value = '';
    
    // Load reviewers list
    loadReviewersList();
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('reviewerSelectionModal'));
    modal.show();
}

function loadReviewersList(searchTerm = '', department = '', role = '') {
    const reviewersList = document.getElementById('reviewersList');
    const noReviewersMessage = document.getElementById('noReviewersMessage');
    
    // Filter reviewers
    let filteredReviewers = reviewersData.filter(reviewer => {
        const matchesSearch = !searchTerm || 
            reviewer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reviewer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reviewer.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reviewer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesDepartment = !department || reviewer.department === department;
        const matchesRole = !role || reviewer.role === role;
        
        return matchesSearch && matchesDepartment && matchesRole;
    });

    // Clear current list
    reviewersList.innerHTML = '';

    if (filteredReviewers.length === 0) {
        noReviewersMessage.style.display = 'block';
        return;
    } else {
        noReviewersMessage.style.display = 'none';
    }

    // Display reviewers
    filteredReviewers.forEach(reviewer => {
        const reviewerCard = createReviewerCard(reviewer);
        reviewersList.appendChild(reviewerCard);
    });
}

function createReviewerCard(reviewer) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'reviewer-card border rounded p-3 mb-3';
    cardDiv.style.cursor = 'pointer';
    cardDiv.style.transition = 'all 0.2s';
    cardDiv.dataset.reviewerId = reviewer.id;
    
    cardDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="me-3">
                <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                     style="width: 50px; height: 50px; font-weight: bold;">
                    ${reviewer.avatar}
                </div>
            </div>
            <div class="flex-grow-1">
                <h6 class="mb-1 fw-bold">${reviewer.name}</h6>
                <p class="mb-1 text-muted small">${reviewer.role} - ${reviewer.department}</p>
                <p class="mb-0 text-muted small">
                    <i class="fas fa-envelope me-1"></i>${reviewer.email}
                    <span class="ms-3"><i class="fas fa-star me-1"></i>${reviewer.specialization}</span>
                </p>
            </div>
            <div class="text-end">
                <span class="badge bg-info">${reviewer.role}</span>
            </div>
        </div>
    `;

    // Add hover effects
    cardDiv.addEventListener('mouseenter', function() {
        if (selectedReviewer?.id !== reviewer.id) {
            this.style.backgroundColor = '#f8f9fa';
            this.style.borderColor = '#0d6efd';
        }
    });

    cardDiv.addEventListener('mouseleave', function() {
        if (selectedReviewer?.id !== reviewer.id) {
            this.style.backgroundColor = '';
            this.style.borderColor = '#dee2e6';
        }
    });

    // Add click handler
    cardDiv.addEventListener('click', function() {
        selectReviewerFromCard(reviewer, cardDiv);
    });

    return cardDiv;
}

function selectReviewerFromCard(reviewer, cardElement) {
    selectedReviewer = reviewer;
    
    // Update UI for selected state
    document.querySelectorAll('.reviewer-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '#dee2e6';
    });
    
    cardElement.style.backgroundColor = '#e7f3ff';
    cardElement.style.borderColor = '#0d6efd';
    
    // Show selected reviewer section
    const selectedSection = document.getElementById('selectedReviewerSection');
    const selectedInfo = document.getElementById('selectedReviewerInfo');
    
    selectedInfo.innerHTML = `
        <div class="me-3">
            <div class="avatar bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                 style="width: 40px; height: 40px; font-weight: bold; font-size: 14px;">
                ${reviewer.avatar}
            </div>
        </div>
        <div>
            <h6 class="mb-1">${reviewer.name}</h6>
            <p class="mb-0 small text-muted">${reviewer.role} - ${reviewer.department}</p>
        </div>
    `;
    
    selectedSection.style.display = 'block';
    document.getElementById('assignReviewerBtn').disabled = false;
}

function filterReviewers() {
    const searchTerm = document.getElementById('reviewerSearch').value;
    const department = document.getElementById('reviewerDepartmentFilter').value;
    const role = document.getElementById('reviewerRoleFilter').value;
    loadReviewersList(searchTerm, department, role);
}

function updateReviewerCards() {
    document.querySelectorAll('.reviewer-card').forEach(card => {
        const reviewerId = card.dataset.reviewerId;
        if (selectedReviewer?.id === reviewerId) {
            card.style.backgroundColor = '#e7f3ff';
            card.style.borderColor = '#0d6efd';
        } else {
            card.style.backgroundColor = '';
            card.style.borderColor = '#dee2e6';
        }
    });
}

function assignReviewer() {
    if (!selectedReviewer) {
        alert('Please select a reviewer');
        return;
    }

    const notes = document.getElementById('reviewerNotes').value;
    const requestId = document.getElementById('docModalRequestId').textContent;
    
    // Update request data with reviewer
    if (requestData[requestId]) {
        requestData[requestId].reviewer = selectedReviewer.id;
        requestData[requestId].reviewerNotes = notes;
    }
    
    // Update current reviewer
    currentRequestReviewer = selectedReviewer;
    
    // Update UI
    loadReviewerInfo(selectedReviewer.id);
    
    // Hide modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('reviewerSelectionModal'));
    modal.hide();

    // Show success message
    showSuccessAlert(`Reviewer ${selectedReviewer.name} has been assigned to this request successfully!`);
    
    console.log('Reviewer assigned:', {
        reviewer: selectedReviewer,
        notes: notes,
        requestId: requestId
    });
}

// Utility functions
function getFileIcon(fileType) {
    const icons = {
        'PDF': '<i class="fas fa-file-pdf fa-2x text-danger"></i>',
        'DOC': '<i class="fas fa-file-word fa-2x text-primary"></i>',
        'DOCX': '<i class="fas fa-file-word fa-2x text-primary"></i>',
        'XLS': '<i class="fas fa-file-excel fa-2x text-success"></i>',
        'XLSX': '<i class="fas fa-file-excel fa-2x text-success"></i>',
        'IMG': '<i class="fas fa-file-image fa-2x text-info"></i>',
        'JPG': '<i class="fas fa-file-image fa-2x text-info"></i>',
        'PNG': '<i class="fas fa-file-image fa-2x text-info"></i>'
    };
    return icons[fileType.toUpperCase()] || '<i class="fas fa-file fa-2x text-secondary"></i>';
}

function navigateToPage(page) {
    const requestId = document.getElementById('docModalRequestId')?.textContent;
    
    if (requestId) {
        const modal = bootstrap.Modal.getInstance(document.getElementById('documentModal'));
        modal.hide();
        
        setTimeout(() => {
            window.location.href = `${page}?requestId=${requestId}`;
        }, 300);
    }
}

function showSuccessAlert(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successAlert').classList.remove('hidden');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        document.getElementById('successAlert').classList.add('hidden');
    }, 3000);
}

function showErrorAlert(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorAlert').classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        document.getElementById('errorAlert').classList.add('hidden');
    }, 5000);
}

// File upload functionality
function initializeFileUpload() {
    console.log('Initializing file upload functionality');
    
    const fileInput = document.getElementById('fileInput');
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const uploadProgress = document.getElementById('uploadProgress');
    const uploadPreview = document.getElementById('uploadPreview');

    // Initially disable upload button
    if (confirmUploadBtn) {
        confirmUploadBtn.disabled = true;
    }

    // Handle file selection
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                if (validateFile(file)) {
                    showFilePreview(file);
                    if (confirmUploadBtn) {
                        confirmUploadBtn.disabled = false;
                    }
                } else {
                    if (confirmUploadBtn) {
                        confirmUploadBtn.disabled = true;
                    }
                    if (uploadPreview) {
                        uploadPreview.style.display = 'none';
                    }
                }
            } else {
                if (confirmUploadBtn) {
                    confirmUploadBtn.disabled = true;
                }
                if (uploadPreview) {
                    uploadPreview.style.display = 'none';
                }
            }
        });
    }

    // Handle upload button click
    if (confirmUploadBtn) {
        confirmUploadBtn.addEventListener('click', function() {
            const file = fileInput.files[0];
            const description = document.getElementById('documentDescription').value;
            
            if (file) {
                uploadFile(file, description);
            }
        });
    }

    // Handle add document button in main modal
    const addDocumentBtn = document.getElementById('addDocumentBtn');
    if (addDocumentBtn) {
        console.log('Found addDocumentBtn, attaching event listener');
        addDocumentBtn.addEventListener('click', function() {
            console.log('Add Document button clicked');
            const uploadModal = new bootstrap.Modal(document.getElementById('fileUploadModal'));
            uploadModal.show();
        });
    } else {
        console.error('addDocumentBtn not found!');
    }

    // Reset form when modal is closed
    const fileUploadModal = document.getElementById('fileUploadModal');
    if (fileUploadModal) {
        fileUploadModal.addEventListener('hidden.bs.modal', function() {
            resetUploadForm();
        });
    }
}

function validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif'
    ];

    if (file.size > maxSize) {
        showErrorAlert('File size exceeds 10MB limit.');
        return false;
    }

    if (!allowedTypes.includes(file.type)) {
        showErrorAlert('File type not supported. Please select PDF, DOCX, Excel, or image files.');
        return false;
    }

    return true;
}

function showFilePreview(file) {
    const preview = document.getElementById('uploadPreview');
    const fileName = document.getElementById('previewFileName');
    const fileInfo = document.getElementById('previewFileInfo');
    const icon = document.getElementById('previewIcon');

    if (fileName) fileName.textContent = file.name;
    if (fileInfo) fileInfo.textContent = `${getFileType(file.type)}, ${formatFileSize(file.size)}`;
    if (icon) icon.innerHTML = getFileIconByType(file.type);
    if (preview) preview.style.display = 'block';
}

function getFileType(mimeType) {
    const typeMap = {
        'application/pdf': 'PDF',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
        'application/msword': 'DOC',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
        'application/vnd.ms-excel': 'XLS',
        'image/jpeg': 'JPG',
        'image/jpg': 'JPG',
        'image/png': 'PNG',
        'image/gif': 'GIF'
    };
    return typeMap[mimeType] || 'Unknown';
}

function getFileIconByType(mimeType) {
    if (mimeType === 'application/pdf') {
        return '<i class="fas fa-file-pdf fa-2x text-danger"></i>';
    } else if (mimeType.includes('word')) {
        return '<i class="fas fa-file-word fa-2x text-primary"></i>';
    } else if (mimeType.includes('sheet') || mimeType.includes('excel')) {
        return '<i class="fas fa-file-excel fa-2x text-success"></i>';
    } else if (mimeType.includes('image')) {
        return '<i class="fas fa-file-image fa-2x text-info"></i>';
    }
    return '<i class="fas fa-file fa-2x text-secondary"></i>';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function uploadFile(file, description) {
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressBar = uploadProgress ? uploadProgress.querySelector('.progress-bar') : null;
    
    // Disable upload button and show progress
    if (confirmUploadBtn) {
        confirmUploadBtn.disabled = true;
        confirmUploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i>Uploading...';
    }
    
    if (uploadProgress) {
        uploadProgress.style.display = 'block';
    }

    // Simulate file upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 90) progress = 90;
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
            progressBar.textContent = Math.round(progress) + '%';
        }
    }, 200);

    // Simulate upload completion after 2-3 seconds
    setTimeout(() => {
        clearInterval(progressInterval);
        if (progressBar) {
            progressBar.style.width = '100%';
            progressBar.textContent = '100%';
        }

        // Add the uploaded file to the current request's documents
        addUploadedDocument(file, description);

        // Reset form and close modal
        const uploadModal = bootstrap.Modal.getInstance(document.getElementById('fileUploadModal'));
        if (uploadModal) {
            uploadModal.hide();
        }

        // Refresh documents list in main modal
        const requestId = document.getElementById('docModalRequestId').textContent;
        const requestDetails = requestData[requestId] || {};
        const currentStatus = document.getElementById('docModalRequestStatus').textContent;
        populateDocumentsList(requestDetails.documents || [], currentStatus);

        showSuccessAlert(`Document "${file.name}" uploaded successfully!`);
    }, 2000 + Math.random() * 1000);
}

function addUploadedDocument(file, description) {
    const requestId = document.getElementById('docModalRequestId').textContent;
    
    if (requestData[requestId]) {
        if (!requestData[requestId].documents) {
            requestData[requestId].documents = [];
        }

        const newDocument = {
            name: file.name,
            type: getFileType(file.type),
            size: formatFileSize(file.size),
            description: description || 'Uploaded document',
            created: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'completed'
        };

        requestData[requestId].documents.push(newDocument);
    }
}

function resetUploadForm() {
    const fileInput = document.getElementById('fileInput');
    const description = document.getElementById('documentDescription');
    const confirmUploadBtn = document.getElementById('confirmUploadBtn');
    const uploadProgress = document.getElementById('uploadProgress');
    const uploadPreview = document.getElementById('uploadPreview');
    const progressBar = uploadProgress ? uploadProgress.querySelector('.progress-bar') : null;

    if (fileInput) fileInput.value = '';
    if (description) description.value = '';
    if (confirmUploadBtn) {
        confirmUploadBtn.disabled = true;
        confirmUploadBtn.innerHTML = '<i class="fas fa-upload me-1"></i>Upload';
    }
    if (uploadProgress) uploadProgress.style.display = 'none';
    if (uploadPreview) uploadPreview.style.display = 'none';
    if (progressBar) {
        progressBar.style.width = '0%';
        progressBar.textContent = '';
    }
}

// Document actions
function downloadDocument(docName) {
    showSuccessAlert(`Downloading "${docName}"...`);
    // In real implementation, would trigger actual download
}

function viewDocument(docName) {
    showSuccessAlert(`Opening "${docName}" for preview...`);
    // In real implementation, would open document viewer
}

function deleteDocument(docName) {
    if (confirm(`Are you sure you want to delete "${docName}"?`)) {
        showSuccessAlert(`Document "${docName}" has been deleted.`);
        // In real implementation, would make API call and refresh the list
    }
}


// Status update functions
function checkForStatusUpdates() {
    const urlParams = new URLSearchParams(window.location.search);
    const ttbgCompleted = urlParams.get('ttbg_completed');
    const requestId = urlParams.get('requestId');
    
    if (ttbgCompleted === 'true' && requestId) {
        // Update status in requestData
        if (requestData[requestId]) {
            requestData[requestId].status = 'Delivered';
        }
        
        // Update status in the main table
        updateTableRowStatus(requestId, 'Delivered');
        
        // Add TTBG document to the request
        addTTBGDocument(requestId);
        
        // Show success message
        showSuccessAlert(`TTBG form completed successfully! Request ${requestId} status updated to "Delivered".`);
        
        // Clean up URL parameters
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
}

function updateTableRowStatus(requestId, newStatus) {
    // Find the table row with this request ID
    const tableRows = document.querySelectorAll('#requestsTableBody tr');
    
    tableRows.forEach(row => {
        const requestIdCell = row.cells[0];
        if (requestIdCell && requestIdCell.textContent.trim() === requestId) {
            // Update status cell (index 9)
            const statusCell = row.cells[9];
            const statusClass = `status-${newStatus.toLowerCase()}`;
            statusCell.innerHTML = `<span class="status-badge ${statusClass}">${newStatus}</span>`;
            
            // Update action buttons (index 10)
            const actionCell = row.cells[10];
            updateTableRowActions(actionCell, requestId, newStatus);
        }
    });
}

function updateTableRowActions(actionCell, requestId, status) {
    let actionsHTML = `
        <button class="btn btn-sm btn-outline-primary view-details-btn" data-id="${requestId}">
            <i class="fas fa-eye"></i> View
        </button>
        <button class="btn btn-sm btn-outline-info document-btn" data-id="${requestId}">
            <i class="fas fa-file-alt"></i> Documents
        </button>
    `;
    
    // Add status-specific buttons
    if (status === 'Delivered') {
        actionsHTML += `
            <button class="btn btn-sm btn-outline-primary reimbursement-btn" data-id="${requestId}">
                <i class="fas fa-receipt"></i> Reimbursement
            </button>
        `;
    } else if (status === 'Ordered') {
        actionsHTML += `
            <button class="btn btn-sm btn-outline-primary reimbursement-btn" data-id="${requestId}">
                <i class="fas fa-receipt"></i> Reimbursement
            </button>
        `;
    }
    
    actionCell.innerHTML = actionsHTML;
    
    // Re-attach event listeners for new buttons
    attachButtonEventListeners(actionCell);
}

function attachButtonEventListeners(actionCell) {
    // This function can be used to re-attach specific event listeners if needed
    // Currently using event delegation, so this may not be necessary
}

// Employee Selection Modal Functions
function showEmployeeSelectionModal(requestId, product, department, amount) {
    // Create or get the modal
    let modal = document.getElementById('employeeSelectionModal');
    if (!modal) {
        createEmployeeSelectionModal();
        modal = document.getElementById('employeeSelectionModal');
    }
    
    // Populate modal with request details
    document.getElementById('sendToModalRequestId').textContent = requestId;
    document.getElementById('sendToModalProduct').textContent = product;
    document.getElementById('sendToModalDepartment').textContent = department;
    document.getElementById('sendToModalAmount').textContent = amount;
    
    // Clear previous search results and search input
    document.getElementById('employeeSearch').value = '';
    document.getElementById('employeeList').innerHTML = '';
    
    // Show the modal
    modal.style.display = 'block';
    
    // Focus on search input
    document.getElementById('employeeSearch').focus();
    
    // Load all employees initially
    loadEmployees();
}

function createEmployeeSelectionModal() {
    const modalHtml = `
        <div id="employeeSelectionModal" class="modal">
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h3>Send Request to Employee</h3>
                    <span class="close" onclick="closeEmployeeSelectionModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="request-details">
                        <h4>Request Details</h4>
                        <p><strong>Request ID:</strong> <span id="sendToModalRequestId"></span></p>
                        <p><strong>Product:</strong> <span id="sendToModalProduct"></span></p>
                        <p><strong>Department:</strong> <span id="sendToModalDepartment"></span></p>
                        <p><strong>Amount:</strong> <span id="sendToModalAmount"></span></p>
                    </div>
                    
                    <div class="employee-selection" style="margin-top: 20px;">
                        <h4>Select Employee</h4>
                        <div class="search-container">
                            <input type="text" id="employeeSearch" placeholder="Search employees by name, department, or position..." 
                                   style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px;">
                        </div>
                        
                        <div id="employeeList" class="employee-list" style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; border-radius: 4px;">
                            <!-- Employee list will be populated here -->
                        </div>
                        
                        <div style="margin-top: 15px;">
                            <label for="sendMessage">Additional Message (Optional):</label>
                            <textarea id="sendMessage" rows="3" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #ddd; border-radius: 4px;" 
                                      placeholder="Add any additional instructions or notes..."></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeEmployeeSelectionModal()">Cancel</button>
                    <button type="button" id="confirmSendToBtn" class="btn btn-primary" onclick="confirmSendToEmployee()" disabled>Send Request</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Add search functionality
    document.getElementById('employeeSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterEmployees(searchTerm);
    });
}

function loadEmployees() {
    // Sample employee data - replace with actual API call
    const employees = [
        { id: 1, name: 'Nguyen Van A', department: 'IT', position: 'Developer', email: 'nguyenvana@company.com' },
        { id: 2, name: 'Tran Thi B', department: 'HR', position: 'HR Manager', email: 'tranthib@company.com' },
        { id: 3, name: 'Le Van C', department: 'Finance', position: 'Accountant', email: 'levanc@company.com' },
        { id: 4, name: 'Pham Thi D', department: 'Marketing', position: 'Marketing Specialist', email: 'phamthid@company.com' },
        { id: 5, name: 'Hoang Van E', department: 'IT', position: 'System Admin', email: 'hoangvane@company.com' },
        { id: 6, name: 'Vu Thi F', department: 'Finance', position: 'Finance Manager', email: 'vuthif@company.com' },
        { id: 7, name: 'Do Van G', department: 'Operations', position: 'Operations Manager', email: 'dovang@company.com' },
        { id: 8, name: 'Bui Thi H', department: 'HR', position: 'Recruiter', email: 'buithih@company.com' }
    ];
    
    displayEmployees(employees);
}

function displayEmployees(employees) {
    const employeeList = document.getElementById('employeeList');
    
    if (employees.length === 0) {
        employeeList.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">No employees found</div>';
        return;
    }
    
    const employeeHtml = employees.map(employee => `
        <div class="employee-item" data-employee-id="${employee.id}" onclick="selectEmployee(${employee.id}, '${employee.name}', '${employee.email}')">
            <div class="employee-info">
                <div class="employee-name">${employee.name}</div>
                <div class="employee-details">${employee.position} - ${employee.department}</div>
                <div class="employee-email">${employee.email}</div>
            </div>
            <div class="employee-select">
                <input type="radio" name="selectedEmployee" value="${employee.id}" style="margin-right: 8px;">
            </div>
        </div>
    `).join('');
    
    employeeList.innerHTML = employeeHtml;
}

function filterEmployees(searchTerm) {
    // Sample employee data - in real implementation, this would filter from the full employee list
    const allEmployees = [
        { id: 1, name: 'Nguyen Van A', department: 'IT', position: 'Developer', email: 'nguyenvana@company.com' },
        { id: 2, name: 'Tran Thi B', department: 'HR', position: 'HR Manager', email: 'tranthib@company.com' },
        { id: 3, name: 'Le Van C', department: 'Finance', position: 'Accountant', email: 'levanc@company.com' },
        { id: 4, name: 'Pham Thi D', department: 'Marketing', position: 'Marketing Specialist', email: 'phamthid@company.com' },
        { id: 5, name: 'Hoang Van E', department: 'IT', position: 'System Admin', email: 'hoangvane@company.com' },
        { id: 6, name: 'Vu Thi F', department: 'Finance', position: 'Finance Manager', email: 'vuthif@company.com' },
        { id: 7, name: 'Do Van G', department: 'Operations', position: 'Operations Manager', email: 'dovang@company.com' },
        { id: 8, name: 'Bui Thi H', department: 'HR', position: 'Recruiter', email: 'buithih@company.com' }
    ];
    
    const filteredEmployees = allEmployees.filter(employee => 
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm) ||
        employee.position.toLowerCase().includes(searchTerm) ||
        employee.email.toLowerCase().includes(searchTerm)
    );
    
    displayEmployees(filteredEmployees);
}

function selectEmployee(employeeId, employeeName, employeeEmail) {
    // Clear previous selections
    document.querySelectorAll('.employee-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Select the clicked employee
    const selectedItem = document.querySelector(`[data-employee-id="${employeeId}"]`);
    selectedItem.classList.add('selected');
    
    // Check the radio button
    const radioButton = selectedItem.querySelector('input[type="radio"]');
    radioButton.checked = true;
    
    // Enable the confirm button
    document.getElementById('confirmSendToBtn').disabled = false;
}

function confirmSendToEmployee() {
    const selectedEmployee = document.querySelector('input[name="selectedEmployee"]:checked');
    
    if (!selectedEmployee) {
        alert('Please select an employee.');
        return;
    }
    
    const requestId = document.getElementById('sendToModalRequestId').textContent;
    const message = document.getElementById('sendMessage').value;
    const employeeId = selectedEmployee.value;
    
    // Get employee details
    const employeeItem = document.querySelector(`[data-employee-id="${employeeId}"]`);
    const employeeName = employeeItem.querySelector('.employee-name').textContent;
    const employeeEmail = employeeItem.querySelector('.employee-email').textContent;
    
    // Here you would typically make an API call to send the request
    // For now, we'll just show a confirmation
    if (confirm(`Send request ${requestId} to ${employeeName} (${employeeEmail})?`)) {
        // Simulate sending request
        alert(`Request ${requestId} has been sent to ${employeeName}!`);
        closeEmployeeSelectionModal();
        
        // Optionally update the request status in the table
        updateRequestStatus(requestId, 'Sent to ' + employeeName);
    }
}

function closeEmployeeSelectionModal() {
    const modal = document.getElementById('employeeSelectionModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function updateRequestStatus(requestId, newStatus) {
    // Find the request row and update its status
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const idCell = row.cells[0];
        if (idCell && idCell.textContent === requestId) {
            const statusCell = row.cells[4]; // Assuming status is in the 5th column
            if (statusCell) {
                statusCell.textContent = newStatus;
            }
        }
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    
    // Check for status updates when page loads
    checkForStatusUpdates();
    
    // Initialize document modal functionality
    initializeDocumentModal();
    
    // Initialize reviewer selection functionality
    initializeReviewerSelection();
    
    // Initialize file upload functionality - DELAY THIS TO ENSURE DOM IS READY
    setTimeout(() => {
        initializeFileUpload();
    }, 100);
    
    // Single event delegation handler for all button clicks
    document.addEventListener('click', function(e) {
        // Handle view details buttons
        if (e.target.closest('.view-details-btn')) {
            const button = e.target.closest('.view-details-btn');
            const requestId = button.getAttribute('data-id');
            const data = requestData[requestId];
            
            if (data) {
                document.getElementById('modalRequestId').textContent = data.id;
                document.getElementById('modalDate').textContent = data.date;
                document.getElementById('modalProduct').textContent = data.product;
                document.getElementById('modalCategory').textContent = data.category;
                document.getElementById('modalPriority').textContent = data.priority;
                document.getElementById('modalQuantity').textContent = data.quantity;
                document.getElementById('modalCost').textContent = data.cost;
                document.getElementById('modalDepartment').textContent = data.department;
                document.getElementById('modalRequester').textContent = data.requester;
                document.getElementById('modalStatus').textContent = data.status;
                document.getElementById('modalApprovalDate').textContent = data.approvalDate;
                document.getElementById('modalDeliveryDate').textContent = data.deliveryDate;
                document.getElementById('modalDescription').textContent = data.description;
                document.getElementById('modalJustification').textContent = data.justification;
                
                const modal = new bootstrap.Modal(document.getElementById('requestDetailsModal'));
                modal.show();
            }
            return;
        }

        // Handle reimbursement buttons
        if (e.target.closest('.reimbursement-btn')) {
            e.preventDefault();
            const button = e.target.closest('.reimbursement-btn');
            const requestId = button.getAttribute('data-id');
            console.log('Reimbursement button clicked for:', requestId);
            window.location.href = `advance_payment_request_form.html?requestId=${requestId}`;
            return;
        }

        // Handle identify suppliers buttons
        if (e.target.closest('.identify-suppliers-btn')) {
            const button = e.target.closest('.identify-suppliers-btn');
            const requestId = button.getAttribute('data-id');
            window.location.href = `admin_identify_suppliers.html?requestId=${requestId}`;
            return;
        }

        // Handle approve buttons
        if (e.target.closest('.approve-btn')) {
            const button = e.target.closest('.approve-btn');
            const requestId = button.getAttribute('data-id');
            
            if (confirm(`Are you sure you want to approve request ${requestId}?`)) {
                document.getElementById('successMessage').innerHTML = 
                    `Request ${requestId} has been approved successfully. You can now identify potential suppliers from the table.`;
                document.getElementById('successAlert').classList.remove('hidden');
                
                // Update the status in the table
                const row = button.closest('tr');
                const statusCell = row.cells[9];
                statusCell.innerHTML = '<span class="status-badge status-approved">Approved</span>';
            }
            return;
        }

        // Handle reject buttons
        if (e.target.closest('.reject-btn')) {
            const button = e.target.closest('.reject-btn');
            const requestId = button.getAttribute('data-id');
            
            const reason = prompt(`Please provide a reason for rejecting request ${requestId}:`);
            if (reason !== null && reason.trim() !== '') {
                document.getElementById('successMessage').textContent = 
                    `Request ${requestId} has been rejected. Reason: ${reason}`;
                document.getElementById('successAlert').classList.remove('hidden');
                
                // Update the status in the table
                const row = button.closest('tr');
                const statusCell = row.cells[9];
                statusCell.innerHTML = '<span class="status-badge status-rejected">Rejected</span>';
                
                setTimeout(() => {
                    document.getElementById('successAlert').classList.add('hidden');
                }, 3000);
            }
            return;
        }

        // Handle Send To button click
        if (e.target.classList.contains('send-to-btn')) {
            const requestId = e.target.getAttribute('data-request-id');
            const row = e.target.closest('tr');
            const product = row.cells[1].textContent;
            const department = row.cells[2].textContent;
            const amount = row.cells[3].textContent;
            
            showEmployeeSelectionModal(requestId, product, department, amount);
        }
    });
    
    // Modal edit button
    document.getElementById('modalEditBtn').addEventListener('click', function() {
        const requestId = document.getElementById('modalRequestId').textContent;
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('requestDetailsModal'));
        modal.hide();
        
        window.location.href = 'request_form.html?edit=' + requestId;
    });
    
    // Modal reorder button
    document.getElementById('modalReorderBtn').addEventListener('click', function() {
        const requestId = document.getElementById('modalRequestId').textContent;
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('requestDetailsModal'));
        modal.hide();
        
        document.getElementById('successMessage').textContent = 
            `Redirecting to create a new request based on ${requestId}`;
        document.getElementById('successAlert').classList.remove('hidden');
        
        setTimeout(() => {
            window.location.href = 'request_form.html?reorder=' + requestId;
        }, 1500);
    });

    // Handle nested dropdowns in sidebar
    const subMenuToggleButtons = document.querySelectorAll('.dropdown-item.dropdown-toggle');
    
    subMenuToggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the nearest submenu to this toggle button
            const submenu = this.nextElementSibling;
            
            // Toggle the show class on this submenu
            submenu.classList.toggle('show');
            
            // Close other submenus at the same level
            const siblings = Array.from(this.parentElement.parentElement.children)
                .filter(child => child !== this.parentElement)
                .map(child => child.querySelector('.dropdown-submenu'))
                .filter(Boolean);
            
            siblings.forEach(sibling => {
                sibling.classList.remove('show');
            });
        });
    });
    
    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-submenu') && !e.target.classList.contains('dropdown-toggle')) {
            document.querySelectorAll('.dropdown-submenu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});
