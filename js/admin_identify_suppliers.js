console.log('=== Supplier Selection Script Loading ===');

// Debug function to check supplier state
window.debugSupplierState = function() {
    console.log('=== SUPPLIER DEBUG STATE ===');
    console.log('Available suppliers:', window.availableSuppliers?.length || 'undefined');
    console.log('Selected suppliers for modal:', window.selectedSuppliers);
    console.log('Selected suppliers for review:', window.selectedSuppliersForReview);
    
    const container = document.getElementById('dynamic-suppliers-container');
    console.log('Container found:', !!container);
    console.log('Container children:', container?.children.length || 'N/A');
    
    const cards = document.querySelectorAll('.supplier-card');
    console.log('Total supplier cards found:', cards.length);
    
    const emptyMessage = document.getElementById('empty-suppliers-message');
    console.log('Empty message visible:', emptyMessage ? emptyMessage.style.display !== 'none' : 'not found');
    
    // Test the creation function
    if (window.availableSuppliers && window.availableSuppliers.length > 0) {
        const testSupplier = window.availableSuppliers[0];
        const testDetails = {
            paymentTerms: 'Net 30',
            shippingDays: 5,
            totalCost: '1000.00',
            costItems: [{ name: 'Test Item', value: 1000 }],
            notes: 'Test notes'
        };
        
        console.log('Testing card creation...');
        const testCard = createSupplierCardWithDetails(testSupplier, testDetails);
        console.log('Test card created:', !!testCard);
        console.log('Test card HTML length:', testCard.innerHTML.length);
    }
    
    console.log('=== END DEBUG STATE ===');
};

// Make sure functions are available immediately
window.testSupplierLoad = function() {
    console.log('=== Manual Test: Loading Suppliers ===');    console.log('Available suppliers count:', window.availableSuppliers?.length || 'undefined');
    console.log('Available suppliers data:', window.availableSuppliers);
    
    // Check if container exists
    const container = document.getElementById('dynamic-suppliers-container');
    console.log('Supplier container found:', !!container);
    if (container) {
        console.log('Container HTML:', container.innerHTML);
    }
    
    if (typeof loadAvailableSuppliers === 'function') {
        loadAvailableSuppliers();
        console.log('loadAvailableSuppliers called manually');
    } else {
        console.error('loadAvailableSuppliers function not found');
    }
    
    // Also test a simple card addition
    if (container) {
        const testCard = document.createElement('div');
        testCard.className = 'supplier-card alert alert-info';
        testCard.innerHTML = '<p><strong>Test Supplier Card</strong><br>This is a test to see if cards can be added to the container.</p>';
        container.appendChild(testCard);
        console.log('Test card added');
    }
};

window.testAddSupplier = function() {
    const supplierContainer = document.getElementById('dynamic-suppliers-container');
    console.log('Test - Supplier container:', supplierContainer);
    
    if (supplierContainer) {
        const testCard = document.createElement('div');
        testCard.className = 'supplier-card';
        testCard.innerHTML = '<div class="alert alert-info">Test supplier card added successfully!</div>';
        supplierContainer.appendChild(testCard);
        console.log('Test card added');
    } else {
        console.error('Test - Supplier container not found');
    }
};

// Supplier management system - mock data (would come from API in real implementation)
window.availableSuppliers = [
    {
        id: 1001,
        name: "TechPro Solutions",
        type: "Hardware Vendor",
        contact: "John Smith",
        email: "john@techpro.com",
        phone: "+1-555-0123",
        website: "https://techpro.com",
        specialization: "Enterprise Network Equipment",
        address: "123 Tech Street, Silicon Valley, CA 94000",
        paymentTerms: "Net 30",
        status: "Active",
        notes: "Reliable supplier for network infrastructure",
        dateAdded: "2024-12-15"
    },
    {
        id: 1002,
        name: "Software Dynamics",
        type: "Software Provider",
        contact: "Sarah Johnson",
        email: "sarah@softdyn.com",
        phone: "+1-555-0456",
        website: "https://softwaedynamics.com",
        specialization: "Enterprise Software Solutions",
        address: "456 Innovation Blvd, Austin, TX 78701",
        paymentTerms: "Net 15",
        status: "Active",
        notes: "Specializes in custom enterprise applications",
        dateAdded: "2024-12-10"
    },
    {
        id: 1003,
        name: "Global Manufacturing Co",
        type: "Manufacturer",
        contact: "Mike Chen",
        email: "mike@globalmanuf.com",
        phone: "+1-555-0789",
        website: "https://globalmanuf.com",
        specialization: "Industrial Equipment Manufacturing",
        address: "789 Factory Road, Detroit, MI 48201",
        paymentTerms: "Net 60",
        status: "Active",
        notes: "Reliable manufacturing partner",
        dateAdded: "2025-01-05"
    },
    {
        id: 1004,
        name: "CloudTech Services",
        type: "Service Provider",
        contact: "Emily Davis",
        email: "emily@cloudtech.com",
        phone: "+1-555-0321",
        website: "https://cloudtech.com",
        specialization: "Cloud Infrastructure & Support",
        address: "321 Cloud Avenue, Seattle, WA 98101",
        paymentTerms: "Net 30",
        status: "Active",
        notes: "Excellent cloud services and support",
        dateAdded: "2024-11-20"
    },
    {
        id: 1005,
        name: "SecureIT Solutions",
        type: "Hardware Vendor",
        contact: "Robert Wilson",
        email: "robert@secureit.com",
        phone: "+1-555-0654",
        website: "https://secureit.com",
        specialization: "Security Equipment & Systems",
        address: "654 Security Blvd, Phoenix, AZ 85001",
        paymentTerms: "Net 45",
        status: "Active",
        notes: "Specialized in security solutions",
        dateAdded: "2024-10-15"
    },
    {
        id: 1006,
        name: "DataCenter Pro",
        type: "Infrastructure Provider",
        contact: "Lisa Martinez",
        email: "lisa@datacenter-pro.com",
        phone: "+1-555-0987",
        website: "https://datacenter-pro.com",
        specialization: "Data Center Equipment & Services",
        address: "321 Server Street, Denver, CO 80201",
        paymentTerms: "Net 30",
        status: "Active",
        notes: "Premium data center solutions with 24/7 support",
        dateAdded: "2024-11-01"
    },
    {
        id: 1007,
        name: "Office Supply Plus",
        type: "Office Equipment",
        contact: "David Brown",
        email: "david@officesupplyplus.com",
        phone: "+1-555-0147",
        website: "https://officesupplyplus.com",
        specialization: "Office Furniture & Equipment",
        address: "789 Office Park Dr, Miami, FL 33101",
        paymentTerms: "Net 15",
        status: "Active",
        notes: "Fast delivery and competitive pricing on office supplies",
        dateAdded: "2024-12-01"
    },
    {
        id: 1008,
        name: "Mobile Tech Corp",
        type: "Technology Vendor",
        contact: "Jennifer Lee",
        email: "jennifer@mobiletech.com",
        phone: "+1-555-0258",
        website: "https://mobiletech.com",
        specialization: "Mobile Devices & Accessories",
        address: "456 Tech Plaza, San Jose, CA 95101",
        paymentTerms: "Net 30",
        status: "Active",
        notes: "Leading supplier of mobile technology solutions",
        dateAdded: "2024-12-20"
    },
];

let selectedSuppliers = [];
let filteredSuppliers = [];

// Initialize filteredSuppliers after availableSuppliers is defined
setTimeout(() => {
    if (window.availableSuppliers && window.availableSuppliers.length > 0) {
        filteredSuppliers = [...window.availableSuppliers];
        window.filteredSuppliers = filteredSuppliers;
        console.log('filteredSuppliers initialized:', filteredSuppliers.length);
    }
}, 0);

// Array to track selected suppliers for review
let selectedSuppliersForReview = [];

// Sample reviewer accounts
const reviewerAccounts = [
    {
        id: 'REV001',
        name: 'Alpha Corporation',
        accountNumber: 'AC-2024-001',
        contact: 'David Wilson',
        email: 'david@alphacorp.com'
    },
    {
        id: 'REV002',
        name: 'Beta Industries',
        accountNumber: 'AC-2024-002',
        contact: 'Maria Rodriguez',
        email: 'maria@betaind.com'
    },
    {
        id: 'REV003',
        name: 'Gamma Solutions',
        accountNumber: 'AC-2024-003',
        contact: 'Robert Lee',
        email: 'robert@gammasol.com'
    }
];

// Sample IT accounts for IT review assignment
const itAccounts = [
    {
        id: 'IT001',
        name: 'John Technical',
        department: 'IT Security',
        email: 'john.tech@company.com',
        specialization: 'Security & Compliance'
    },
    {
        id: 'IT002',
        name: 'Sarah Systems',
        department: 'Infrastructure',
        email: 'sarah.sys@company.com',
        specialization: 'Network & Infrastructure'
    },
    {
        id: 'IT003',
        name: 'Mike Software',
        department: 'Software Development',
        email: 'mike.soft@company.com',
        specialization: 'Software Architecture'
    }
];

// Expose key variables and arrays to global scope immediately
window.selectedSuppliers = selectedSuppliers;
window.filteredSuppliers = filteredSuppliers;

// Load available suppliers in modal
function loadAvailableSuppliers() {
    console.log('=== loadAvailableSuppliers called ===');
    console.log('availableSuppliers:', window.availableSuppliers);
    console.log('filteredSuppliers:', filteredSuppliers);
    
    const grid = document.getElementById('suppliersGrid');
    const noSuppliersMessage = document.getElementById('noSuppliersMessage');
    
    console.log('Grid element:', grid);
    console.log('No suppliers message element:', noSuppliersMessage);

    if (!grid || !noSuppliersMessage) {
        console.error('Grid or noSuppliersMessage element not found!');
        return;
    }

    if (filteredSuppliers.length === 0) {
        console.log('No suppliers to display');
        grid.style.display = 'none';
        noSuppliersMessage.style.display = 'block';
        return;
    }

    console.log('Displaying suppliers, count:', filteredSuppliers.length);
    grid.style.display = 'grid';
    noSuppliersMessage.style.display = 'none';

    const suppliersHTML = filteredSuppliers.map(supplier => `
        <div class="supplier-selection-card ${selectedSuppliers.includes(supplier.id) ? 'selected' : ''}" 
             onclick="toggleSupplierSelection(${supplier.id})">
            <div class="selection-checkbox">
                ${selectedSuppliers.includes(supplier.id) ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="supplier-name">${supplier.name}</div>
            <div class="supplier-type">${supplier.type}</div>
            <div class="supplier-contact">
                <i class="fas fa-user me-1"></i>${supplier.contact}<br>
                <i class="fas fa-envelope me-1"></i>${supplier.email}<br>
                <i class="fas fa-phone me-1"></i>${supplier.phone}
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="supplier-specialization">
                    <small class="text-muted">${supplier.specialization}</small>
                </div>
                <div class="supplier-status ${supplier.status.toLowerCase()}">${supplier.status}</div>
            </div>
        </div>
    `).join('');
    
    console.log('Generated HTML length:', suppliersHTML.length);
    grid.innerHTML = suppliersHTML;
    console.log('HTML set to grid');
}

// Filter available suppliers
function filterAvailableSuppliers() {
    const searchInput = document.getElementById('modalSearchSuppliers');
    const filterSelect = document.getElementById('modalFilterByType');
    
    if (!searchInput || !filterSelect) return;

    const searchTerm = searchInput.value.toLowerCase();
    const typeFilter = filterSelect.value;

    filteredSuppliers = window.availableSuppliers.filter(supplier => {
        const matchesSearch = searchTerm === '' || 
            supplier.name.toLowerCase().includes(searchTerm) ||
            supplier.contact.toLowerCase().includes(searchTerm) ||
            supplier.specialization.toLowerCase().includes(searchTerm) ||
            supplier.email.toLowerCase().includes(searchTerm);

        const matchesType = typeFilter === '' || supplier.type === typeFilter;

        return matchesSearch && matchesType;
    });

    loadAvailableSuppliers();
}

// Toggle supplier selection
function toggleSupplierSelection(supplierId) {
    const index = selectedSuppliers.indexOf(supplierId);
    if (index > -1) {
        selectedSuppliers.splice(index, 1);
    } else {
        selectedSuppliers.push(supplierId);
    }

    updateSelectionUI();
    loadAvailableSuppliers();
}

// Toggle supplier selection for review (for dynamic suppliers)
function toggleDynamicSupplierSelection(supplierId) {
    console.log('Toggling dynamic supplier selection for ID:', supplierId);
    
    const card = document.querySelector(`[data-supplier-id="${supplierId}"]`);
    if (!card) {
        console.error('Supplier card not found for ID:', supplierId);
        return;
    }
    
    const index = selectedSuppliersForReview.indexOf(supplierId);
    if (index > -1) {
        // Remove from selection
        selectedSuppliersForReview.splice(index, 1);
        card.classList.remove('selected');
        console.log('Supplier deselected:', supplierId);
    } else {
        // Add to selection
        selectedSuppliersForReview.push(supplierId);
        card.classList.add('selected');
        console.log('Supplier selected:', supplierId);
    }
    
    console.log('Selected suppliers for review:', selectedSuppliersForReview);
    updateSendToReviewButton();
}

// Update selection UI
function updateSelectionUI() {
    const count = selectedSuppliers.length;
    const countDisplay = document.getElementById('selectedSuppliersCount');
    const countText = document.getElementById('selectedCountText');
    const selectedCount = document.getElementById('selectedCount');
    const confirmBtn = document.getElementById('confirmSupplierSelection');

    if (!countDisplay || !countText || !selectedCount || !confirmBtn) return;

    if (count > 0) {
        countDisplay.style.display = 'block';
        countText.textContent = `${count} supplier${count > 1 ? 's' : ''} selected`;
        selectedCount.textContent = count;
        confirmBtn.disabled = false;
    } else {
        countDisplay.style.display = 'none';
        selectedCount.textContent = '0';
        confirmBtn.disabled = true;
    }
}

// Update Send to Review button state
function updateSendToReviewButton() {
    const sendToReviewBtn = document.getElementById('sendToReviewBtn');
    if (sendToReviewBtn) {
        if (selectedSuppliersForReview.length > 0) {
            sendToReviewBtn.disabled = false;
            sendToReviewBtn.innerHTML = `<i class="fas fa-paper-plane me-1"></i> Send ${selectedSuppliersForReview.length} to Review`;
        } else {
            sendToReviewBtn.disabled = true;
            sendToReviewBtn.innerHTML = `<i class="fas fa-paper-plane me-1"></i> Send to Review`;
        }
    }
}

// Send selected suppliers to review
function sendSelectedSuppliersToReview() {
    console.log('=== Sending suppliers to review ===');
    
    if (selectedSuppliersForReview.length === 0) {
        showNotification('Please select at least one supplier to send to review.', 'warning');
        return;
    }
    
    // Get selected supplier data
    const selectedSupplierCards = selectedSuppliersForReview.map(id => {
        const card = document.querySelector(`[data-supplier-id="${id}"]`);
        return {
            id: id,
            element: card,
            // Extract data from the card for the review process
            supplierName: card.querySelector('.fw-bold')?.textContent || 'Unknown'
        };
    });
    
    console.log('Selected suppliers for review:', selectedSupplierCards);
    
    // Show confirmation and send to review
    const supplierNames = selectedSupplierCards.map(s => s.supplierName).join(', ');
    const confirmed = confirm(`Send ${selectedSuppliersForReview.length} supplier(s) to review?\n\nSuppliers: ${supplierNames}`);
    
    if (confirmed) {
        // In a real application, this would make an API call
        // For now, we'll simulate the process
        showNotification(`Successfully sent ${selectedSuppliersForReview.length} supplier(s) to review: ${supplierNames}`, 'success');
        
        // Clear selections after sending
        selectedSuppliersForReview.forEach(id => {
            const card = document.querySelector(`[data-supplier-id="${id}"]`);
            if (card) {
                card.classList.remove('selected');
            }
        });
        selectedSuppliersForReview = [];
        updateSendToReviewButton();
        
        // Optional: Redirect to review page after a delay
        setTimeout(() => {
            if (confirm('Would you like to go to the review page now?')) {
                window.location.href = 'it_review_list.html';
            }
        }, 2000);
    }
}

// Clear all selections
function clearAllSelections() {
    selectedSuppliers = [];
    selectedSuppliersForReview = [];
    updateSelectionUI();
    loadAvailableSuppliers();
}

// Proceed to supplier details form
function proceedToSupplierDetails() {
    if (selectedSuppliers.length === 0) return;

    // Hide the supplier selection modal
    const selectionModal = bootstrap.Modal.getInstance(document.getElementById('supplierSelectionModal'));
    if (selectionModal) selectionModal.hide();

    // Show the supplier details form modal
    generateSupplierDetailsForm();
    const detailsModal = new bootstrap.Modal(document.getElementById('supplierDetailsFormModal'));
    detailsModal.show();
}

// Generate supplier details form
function generateSupplierDetailsForm() {
    const container = document.getElementById('supplierDetailsContainer');
    if (!container) return;

    const selectedSupplierData = availableSuppliers.filter(s => selectedSuppliers.includes(s.id));
    
    container.innerHTML = selectedSupplierData.map((supplier, index) => `
        <div class="supplier-details-card" data-supplier-id="${supplier.id}">
            <div class="supplier-details-header">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="mb-1">${supplier.name}</h5>
                        <small class="text-muted">${supplier.type} • ${supplier.specialization}</small>
                    </div>
                    <div class="text-end">
                        <small class="text-muted">Contact: ${supplier.contact}</small><br>
                        <small class="text-muted">${supplier.email}</small>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="paymentTerms_${supplier.id}" class="form-label">
                            <i class="fas fa-calendar-alt me-1"></i>Payment Terms *
                        </label>
                        <select class="form-select" id="paymentTerms_${supplier.id}" name="paymentTerms_${supplier.id}" required>
                            <option value="">Select Payment Terms</option>
                            <option value="Net 15">Net 15 days</option>
                            <option value="Net 30">Net 30 days</option>
                            <option value="Net 45">Net 45 days</option>
                            <option value="Net 60">Net 60 days</option>
                            <option value="COD">Cash on Delivery (COD)</option>
                            <option value="Prepaid">Prepaid</option>
                            <option value="Custom">Custom Terms</option>
                        </select>
                    </div>
                    
                    <div class="mb-3" id="customTermsContainer_${supplier.id}" style="display: none;">
                        <label for="customPaymentTerms_${supplier.id}" class="form-label">
                            <i class="fas fa-edit me-1"></i>Custom Payment Terms
                        </label>
                        <input type="text" class="form-control" id="customPaymentTerms_${supplier.id}" name="customPaymentTerms_${supplier.id}" placeholder="Enter custom payment terms">
                    </div>
                    
                    <div class="mb-3">
                        <label for="shippingDays_${supplier.id}" class="form-label">
                            <i class="fas fa-shipping-fast me-1"></i>Shipping/Delivery Days *
                        </label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="shippingDays_${supplier.id}" name="shippingDays_${supplier.id}" min="1" max="365" required>
                            <span class="input-group-text">days</span>
                        </div>
                        <div class="form-text">Expected delivery time from order confirmation</div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="totalCost_${supplier.id}" class="form-label">
                            <i class="fas fa-dollar-sign me-1"></i>Total Estimate Cost *
                        </label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control" id="totalCost_${supplier.id}" name="totalCost_${supplier.id}" step="0.01" min="0" required readonly>
                        </div>
                    </div>
                    
                    <div class="cost-breakdown">
                        <div class="cost-breakdown-header">
                            <i class="fas fa-list me-1"></i>Cost Breakdown
                        </div>
                        <div id="costItems_${supplier.id}">
                            <div class="cost-item">
                                <div class="cost-item-description">
                                    <input type="text" class="form-control form-control-sm" placeholder="Item description (e.g., Hardware, Software License, Installation)" name="costItemName_${supplier.id}_1">
                                </div>
                                <div class="cost-item-value">
                                    <span class="text-muted">$</span>
                                    <input type="number" class="cost-item-input" step="0.01" min="0" placeholder="0.00" name="costItemValue_${supplier.id}_1" onchange="updateTotalCost(${supplier.id})">
                                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeCostItem(this, ${supplier.id})" title="Remove item" style="opacity: 0.6;">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="cost-total-row">
                            <div class="d-flex justify-content-between align-items-center">
                                <span><i class="fas fa-calculator me-1"></i>Total Amount:</span>
                                <span class="fs-5 text-success">$<span id="costTotal_${supplier.id}">0.00</span></span>
                            </div>
                        </div>
                        <button type="button" class="btn btn-add-cost-item btn-sm mt-2" onclick="addCostItem(${supplier.id})">
                            <i class="fas fa-plus me-1"></i>Add Another Cost Item
                        </button>
                    </div>
                    
                    <div class="mb-3 mt-3">
                        <label for="notes_${supplier.id}" class="form-label">
                            <i class="fas fa-sticky-note me-1"></i>Additional Notes
                        </label>
                        <textarea class="form-control" id="notes_${supplier.id}" name="notes_${supplier.id}" rows="3" placeholder="Any additional notes about pricing, terms, or special conditions..."></textarea>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for payment terms dropdowns
    selectedSupplierData.forEach(supplier => {
        const paymentSelect = document.getElementById(`paymentTerms_${supplier.id}`);
        if (paymentSelect) {
            paymentSelect.addEventListener('change', function() {
                const customContainer = document.getElementById(`customTermsContainer_${supplier.id}`);
                if (customContainer) {
                    customContainer.style.display = this.value === 'Custom' ? 'block' : 'none';
                }
            });
        }
    });
}

// Add cost item to breakdown
function addCostItem(supplierId) {
    const container = document.getElementById(`costItems_${supplierId}`);
    if (!container) return;
    
    const itemCount = container.children.length + 1;
    const newItem = document.createElement('div');
    newItem.className = 'cost-item';
    newItem.innerHTML = `
        <div class="cost-item-description">
            <input type="text" class="form-control form-control-sm" placeholder="Item description (e.g., Hardware, Software License, Installation)" name="costItemName_${supplierId}_${itemCount}">
        </div>
        <div class="cost-item-value">
            <span class="text-muted">$</span>
            <input type="number" class="cost-item-input" step="0.01" min="0" placeholder="0.00" name="costItemValue_${supplierId}_${itemCount}" onchange="updateTotalCost(${supplierId})">
            <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeCostItem(this, ${supplierId})" title="Remove item">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    container.appendChild(newItem);
}

// Remove cost item
function removeCostItem(button, supplierId) {
    const item = button.closest('.cost-item');
    item.remove();
    updateTotalCost(supplierId);
}

// Update total cost calculation
function updateTotalCost(supplierId) {
    const costInputs = document.querySelectorAll(`input[name^="costItemValue_${supplierId}_"]`);
    let total = 0;
    
    costInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        total += value;
    });
    
    const totalInput = document.getElementById(`totalCost_${supplierId}`);
    const totalDisplay = document.getElementById(`costTotal_${supplierId}`);
    
    if (totalInput) {
        totalInput.value = total.toFixed(2);
    }
    if (totalDisplay) {
        totalDisplay.textContent = total.toFixed(2);
    }
}

// Add selected suppliers to the page
function addSelectedSuppliersWithDetails() {
    console.log('=== addSelectedSuppliersWithDetails started ===');
    console.log('selectedSuppliers:', selectedSuppliers);
    
    if (selectedSuppliers.length === 0) {
        console.log('No suppliers selected, returning early');
        return;
    }

    // Validate the form
    const form = document.getElementById('supplierDetailsForm');
    console.log('Form element:', form);
    if (!form.checkValidity()) {
        console.log('Form validation failed');
        form.reportValidity();
        return;
    }
    
    const supplierContainer = document.getElementById('dynamic-suppliers-container');
    console.log('Supplier container found:', supplierContainer);
    if (!supplierContainer) {
        console.error('Supplier container not found!');
        return;
    }    // Clear empty state message if it exists
    const emptyState = document.getElementById('empty-suppliers-message');
    if (emptyState) {
        console.log('Removing empty state');
        emptyState.remove();
    }

    // Clear any existing supplier cards to prevent duplicates
    const existingCards = supplierContainer.querySelectorAll('.supplier-card');
    console.log('Found existing supplier cards:', existingCards.length);
    existingCards.forEach((card, index) => {
        console.log(`Removing existing card ${index + 1}:`, card.getAttribute('data-supplier-id'));
        card.remove();
    });

    const selectedSupplierData = window.availableSuppliers.filter(s => selectedSuppliers.includes(s.id));
    console.log('Available suppliers:', window.availableSuppliers);
    console.log('Selected supplier data:', selectedSupplierData);    selectedSupplierData.forEach((supplier, index) => {
        console.log(`\n--- Processing supplier ${index + 1}: ${supplier.name} ---`);
        
        // Since we cleared all existing cards above, we can proceed directly
        console.log('Processing supplier ID:', supplier.id);

        // Debug logging
        console.log('Processing supplier:', supplier);

        // Collect form data for this supplier
        const paymentTermsElement = document.getElementById(`paymentTerms_${supplier.id}`);
        const customPaymentTermsElement = document.getElementById(`customPaymentTerms_${supplier.id}`);
        const shippingDaysElement = document.getElementById(`shippingDays_${supplier.id}`);
        const totalCostElement = document.getElementById(`totalCost_${supplier.id}`);
        const notesElement = document.getElementById(`notes_${supplier.id}`);
        
        console.log('Form elements found:', {
            paymentTerms: !!paymentTermsElement,
            customPaymentTerms: !!customPaymentTermsElement,
            shippingDays: !!shippingDaysElement,
            totalCost: !!totalCostElement,
            notes: !!notesElement
        });

        const paymentTerms = paymentTermsElement?.value || '';
        const customPaymentTerms = customPaymentTermsElement?.value || '';
        const shippingDays = shippingDaysElement?.value || '';
        const totalCost = totalCostElement?.value || '';
        const notes = notesElement?.value || '';

        // Debug logging for form data
        console.log('Form data collected:', {
            paymentTerms,
            customPaymentTerms,
            shippingDays,
            totalCost,
            notes
        });

        // Get cost breakdown
        const costItems = [];
        const costItemInputs = document.querySelectorAll(`input[name^="costItemName_${supplier.id}_"]`);
        costItemInputs.forEach((nameInput, index) => {
            const valueInput = document.querySelector(`input[name="costItemValue_${supplier.id}_${index + 1}"]`);
            if (nameInput.value && valueInput && valueInput.value) {
                costItems.push({
                    name: nameInput.value,
                    value: parseFloat(valueInput.value)
                });
            }
        });

        const finalPaymentTerms = paymentTerms === 'Custom' ? customPaymentTerms : paymentTerms;
        
        // Debug logging for final data
        const supplierDetails = {
            paymentTerms: finalPaymentTerms,
            shippingDays: shippingDays,
            totalCost: totalCost,
            costItems: costItems,
            notes: notes
        };
        console.log('Final supplier details:', supplierDetails);
        
        try {
            console.log('About to create supplier card with details...');
            const supplierCard = createSupplierCardWithDetails(supplier, supplierDetails);
            console.log('Supplier card created:', supplierCard);
            console.log('Supplier card HTML:', supplierCard.outerHTML.substring(0, 200) + '...');
              if (supplierCard && supplierContainer) {
                console.log('Attempting to append card to container...');
                supplierContainer.appendChild(supplierCard);
                console.log('Supplier card appended successfully');
                
                // Force a repaint/reflow
                supplierContainer.offsetHeight;
                
                // Verify it was actually added
                const addedCards = supplierContainer.querySelectorAll('.supplier-card');
                console.log(`Total supplier cards in container after append: ${addedCards.length}`);
                
                // Double-check the card is visible
                const cardRect = supplierCard.getBoundingClientRect();
                console.log('Card dimensions:', cardRect);
                console.log('Card visibility:', supplierCard.offsetHeight > 0 && supplierCard.offsetWidth > 0);
                
                // Ensure the empty message is hidden
                const emptyMessage = document.getElementById('empty-suppliers-message');
                if (emptyMessage) {
                    emptyMessage.style.display = 'none';
                }
            } else {
                console.error('Failed to create or append supplier card');
                console.error('supplierCard exists:', !!supplierCard);
                console.error('supplierContainer exists:', !!supplierContainer);
            }
        } catch (error) {
            console.error('Error creating supplier card:', error);
            console.error('Error stack:', error.stack);
            
            // Create a simple fallback card
            const fallbackCard = document.createElement('div');
            fallbackCard.className = 'supplier-card';
            fallbackCard.innerHTML = `
                <div class="alert alert-warning">
                    <h5>Error displaying supplier: ${supplier.name || 'Unknown'}</h5>
                    <p>There was an error displaying this supplier's details. Please try again.</p>
                    <small>Error: ${error.message}</small>
                </div>
            `;
            supplierContainer.appendChild(fallbackCard);
        }
    });

    console.log('=== All suppliers processed ===');
    
    // Final verification
    const finalCardCount = supplierContainer.querySelectorAll('.supplier-card').length;
    console.log(`Final supplier card count in container: ${finalCardCount}`);
    
    if (finalCardCount === 0) {
        console.warn('WARNING: No supplier cards found in container after processing!');
        // Add a warning message
        const warningDiv = document.createElement('div');
        warningDiv.className = 'alert alert-warning';
        warningDiv.innerHTML = `
            <h5>No Suppliers Displayed</h5>
            <p>Suppliers were processed but are not displaying. This may be a technical issue.</p>
            <button class="btn btn-sm btn-primary" onclick="window.testAddSupplier()">Test Add Supplier</button>
        `;
        supplierContainer.appendChild(warningDiv);
    }

    // Hide details modal
    const detailsModal = bootstrap.Modal.getInstance(document.getElementById('supplierDetailsFormModal'));
    if (detailsModal) {
        console.log('Hiding details modal');
        detailsModal.hide();
    }

    // Show success message
    console.log('Showing success message');
    showSuccessMessage(`Successfully added ${selectedSuppliers.length} supplier${selectedSuppliers.length > 1 ? 's' : ''} with configured details to the request.`);

    // Clear selections
    console.log('Clearing selections');
    selectedSuppliers = [];
    updateSelectionUI();
    
    // Update supplier count for existing functions
    updateSupplierCount();
    
    console.log('=== addSelectedSuppliersWithDetails completed ===');
}

// Create supplier card element with details
function createSupplierCardWithDetails(supplier, details) {
    console.log('=== createSupplierCardWithDetails called ===');
    console.log('Supplier:', supplier);
    console.log('Details:', details);
    
    if (!supplier) {
        console.error('No supplier data provided');
        return document.createElement('div');
    }
    
    if (!details) {
        console.error('No details data provided');
        return document.createElement('div');
    }
    
    const card = document.createElement('div');
    card.className = 'supplier-card';
    card.setAttribute('data-supplier-id', supplier.id || 'unknown');
    
    // Add click handler for selection
    card.addEventListener('click', function(e) {
        // Prevent selection when clicking buttons
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }
        toggleDynamicSupplierSelection(supplier.id);
    });
    
    // Generate a unique ID for buttons
    const uniqueId = `supplier_${supplier.id}_${Date.now()}`;

    // Format cost breakdown for display
    let costBreakdownHtml = '';
    if (details.costItems && details.costItems.length > 0) {
        try {
            const itemsList = details.costItems.map(item => 
                `<div class="d-flex justify-content-between border-bottom py-1">
                    <small class="text-muted">${item.name || 'Unnamed item'}</small>
                    <small class="fw-bold">$${(item.value || 0).toFixed(2)}</small>
                </div>`
            ).join('');
            costBreakdownHtml = `
                <div class="mt-2 p-2 bg-light rounded cost-breakdown-display">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong class="text-primary"><i class="fas fa-list me-1"></i>Cost Breakdown:</strong>
                        <small class="text-muted">${details.costItems.length} item${details.costItems.length > 1 ? 's' : ''}</small>
                    </div>
                    ${itemsList}
                    <div class="d-flex justify-content-between border-top pt-2 mt-2">
                        <strong>Total:</strong>
                        <strong class="text-success">$${details.totalCost || '0.00'}</strong>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Error generating cost breakdown:', error);
            costBreakdownHtml = '<div class="mt-2 text-muted"><small>Cost breakdown unavailable</small></div>';
        }
    }
    
    card.innerHTML = `
        <div class="d-flex justify-content-between align-items-top mb-3">
            <div>
                <h4>${supplier.name}</h4>
                <p class="text-muted mb-0">${supplier.specialization}</p>
            </div>
            <div class="supplier-header-badges">
                <div class="supplier-main-badges">
                    <span class="recommendation-badge alternative" id="badge${uniqueId}">Alternative</span>
                    <button class="btn btn-sm btn-outline-primary ms-2" id="recommendBtn${uniqueId}" onclick="toggleRecommendationNew('${uniqueId}')">
                        <i class="far fa-star"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger ms-1" onclick="deleteSupplierCard(this, '${supplier.name}')" title="Delete Supplier">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="it-recommendation it-no-issues" id="itRecommend${uniqueId}" style="display: none;">
                    <i class="fas fa-check-circle me-1"></i>IT Reviewed - No Issues
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-6">
                <p><strong>Contact:</strong> ${supplier.contact || 'No contact'}</p>
                <p><strong>Email:</strong> ${supplier.email || 'No email'}</p>
                <p><strong>Phone:</strong> ${supplier.phone || 'No phone'}</p>
                <p><strong>Website:</strong> <a href="${supplier.website || '#'}" target="_blank">${supplier.website || 'No website'}</a></p>
                <p><strong>Address:</strong> ${supplier.address || 'No address provided'}</p>
            </div>
            <div class="col-md-6">
                <p><strong>Specialization:</strong> ${supplier.specialization || 'Not specified'}</p>
                <p><strong>Payment Terms:</strong> ${details.paymentTerms || 'Not specified'}</p>
                <p><strong>Estimate Cost:</strong> <span class="text-success fw-bold">$${details.totalCost || '0.00'}</span></p>
                <p><strong>Shipping Time:</strong> ${details.shippingDays || '0'} days</p>
                ${costBreakdownHtml}
                ${details.notes ? `<p><strong>Notes:</strong> ${details.notes}</p>` : ''}
            </div>
            <div class="col-md-12 text-md-end mt-2">
                <button class="btn btn-outline-primary mb-2">
                    <i class="fas fa-history me-1"></i> View History
                </button>
                <button class="btn btn-success mb-2">
                    <i class="fas fa-envelope me-1"></i> Contact
                </button>
            </div>
        </div>
    `;

    return card;
}

// Delete supplier card (new function to avoid conflicts)
function deleteSupplierCard(button, supplierName) {
    if (confirm(`Are you sure you want to remove "${supplierName}" from this request?`)) {
        const supplierCard = button.closest('.supplier-card');
        
        supplierCard.style.transition = 'all 0.3s ease';
        supplierCard.style.opacity = '0';
        supplierCard.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            supplierCard.remove();
            showSuccessMessage(`"${supplierName}" has been successfully removed from the supplier list.`);
            updateSupplierCount();
            
            // Check if no suppliers left and show empty state
            const remainingCards = document.querySelectorAll('.supplier-card');
            if (remainingCards.length === 0) {
                const supplierCardsContainer = document.getElementById('dynamic-suppliers-container');
                if (supplierCardsContainer) {
                    supplierCardsContainer.innerHTML = `
                        <div class="text-center py-5">
                            <i class="fas fa-users fa-3x text-muted mb-3"></i>
                            <h5 class="text-muted">No Suppliers Added</h5>
                            <p class="text-muted">Click "Select Suppliers" button above to add potential suppliers for this request.</p>
                        </div>
                    `;
                }
            }
        }, 300);
    }
}

// Update supplier count for existing functionality
function updateSupplierCount() {
    window.supplierCount = document.querySelectorAll('.supplier-card').length;
}

// Toggle recommendation for new suppliers
function toggleRecommendationNew(uniqueId) {
    const badge = document.getElementById(`badge${uniqueId}`);
    const btn = document.getElementById(`recommendBtn${uniqueId}`);
    
    if (!badge || !btn) return;
    
    if (badge.textContent === 'Recommended') {
        badge.textContent = 'Alternative';
        badge.className = 'recommendation-badge alternative';
        btn.innerHTML = '<i class="far fa-star"></i>';
        btn.className = 'btn btn-sm btn-outline-primary ms-2';
    } else {
        badge.textContent = 'Recommended';
        badge.className = 'recommendation-badge recommended';
        btn.innerHTML = '<i class="fas fa-star"></i>';
        btn.className = 'btn btn-sm btn-success ms-2';
    }
}

// Notification system
function showNotification(message, type = 'success', duration = 5000) {
    console.log('Showing notification:', message, type);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show notification-toast`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    let icon;
    switch(type) {
        case 'success':
            icon = 'fas fa-check-circle';
            break;
        case 'warning':
            icon = 'fas fa-exclamation-triangle';
            break;
        case 'danger':
        case 'error':
            icon = 'fas fa-exclamation-circle';
            break;
        case 'info':
            icon = 'fas fa-info-circle';
            break;
        default:
            icon = 'fas fa-bell';
    }
    
    notification.innerHTML = `
        <i class="${icon} me-2"></i>
        ${message}
        <button type="button" class="btn-close" aria-label="Close"></button>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.btn-close');
    closeBtn.addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 150);
    });
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 150);
        }
    }, duration);
    
    return notification;
}

// Legacy show success/error message functions for compatibility
function showSuccessMessage(message) {
    showNotification(message, 'success');
}

function showErrorMessage(message) {
    showNotification(message, 'danger');
}

// Toggle recommendation function for legacy hardcoded suppliers
function toggleRecommendation(supplierId) {
    const badge = document.getElementById(`badge${supplierId}`);
    const btn = document.getElementById(`recommendBtn${supplierId}`);
    
    if (!badge || !btn) return;
    
    if (badge.textContent === 'Recommended') {
        badge.textContent = 'Alternative';
        badge.className = 'recommendation-badge alternative';
        btn.innerHTML = '<i class="far fa-star"></i>';
        btn.className = 'btn btn-sm btn-outline-primary ms-2';
    } else {
        badge.textContent = 'Recommended';
        badge.className = 'recommendation-badge recommended';
        btn.innerHTML = '<i class="fas fa-star"></i>';
        btn.className = 'btn btn-sm btn-success ms-2';
    }
}

// Delete supplier function for legacy hardcoded suppliers
function deleteSupplier(button, supplierName) {
    if (confirm(`Are you sure you want to remove "${supplierName}" from this request?`)) {
        const supplierCard = button.closest('.supplier-card');
        
        supplierCard.style.transition = 'all 0.3s ease';
        supplierCard.style.opacity = '0';
        supplierCard.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            supplierCard.remove();
            showSuccessMessage(`"${supplierName}" has been successfully removed from the supplier list.`);
        }, 300);
    }
}

// Function to enlarge product information image
function enlargeImage(img) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Product Information - Full View</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <img src="${img.src}" class="img-fluid" alt="Product Information Full View" style="max-height: 80vh; object-fit: contain;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Remove modal from DOM when hidden
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}


// Make functions globally available
window.loadAvailableSuppliers = loadAvailableSuppliers;
window.updateSelectionUI = updateSelectionUI;
window.toggleSupplierSelection = toggleSupplierSelection;
window.toggleDynamicSupplierSelection = toggleDynamicSupplierSelection;
window.sendSelectedSuppliersToReview = sendSelectedSuppliersToReview;
window.updateSendToReviewButton = updateSendToReviewButton;
window.clearAllSelections = clearAllSelections;
window.deleteSupplierCard = deleteSupplierCard;
window.toggleRecommendationNew = toggleRecommendationNew;
window.proceedToSupplierDetails = proceedToSupplierDetails;
window.addCostItem = addCostItem;
window.removeCostItem = removeCostItem;
window.updateTotalCost = updateTotalCost;
window.showNotification = showNotification;
window.showSuccessMessage = showSuccessMessage;
window.showErrorMessage = showErrorMessage;
window.addSelectedSuppliersWithDetails = addSelectedSuppliersWithDetails;
window.toggleRecommendation = toggleRecommendation;
window.deleteSupplier = deleteSupplier;
window.enlargeImage = enlargeImage;

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    
    // Get all supplier cards
    const supplierCards = document.querySelectorAll('.supplier-card');
    
    // Get request ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const requestId = urlParams.get('requestId') || 'Unknown';
    
    // Initialize supplier selection modal
    const supplierModal = document.getElementById('supplierSelectionModal');
    if (supplierModal) {
        console.log('Supplier modal found, adding event listener');
        console.log('Available suppliers count:', window.availableSuppliers?.length || 0);
        
        supplierModal.addEventListener('shown.bs.modal', function() {
            console.log('Modal opened, loading suppliers...');
            loadAvailableSuppliers();
            updateSelectionUI();
        });
    } else {
        console.error('Supplier modal not found!');
    }    // Add event listener for save supplier details button
    const saveDetailsBtn = document.getElementById('saveSupplierDetails');
    if (saveDetailsBtn) {
        saveDetailsBtn.addEventListener('click', addSelectedSuppliersWithDetails);
    }    // Send to Review button
    const sendToReviewBtn = document.getElementById('sendToReviewBtn');
    if (sendToReviewBtn) {
        sendToReviewBtn.addEventListener('click', showSendToReviewModal);
    }

    // Send to IT Review button
    const sendToITBtn = document.getElementById('sendToITBtn');
    if (sendToITBtn) {
        sendToITBtn.addEventListener('click', showSendToITModal);
    }

    // Confirm send to review
    const confirmSendToReviewBtn = document.getElementById('confirmSendToReviewBtn');
    if (confirmSendToReviewBtn) {
        confirmSendToReviewBtn.addEventListener('click', sendSuppliersToReview);
    }

    // Confirm send to IT
    const confirmSendToITBtn = document.getElementById('confirmSendToITBtn');
    if (confirmSendToITBtn) {
        confirmSendToITBtn.addEventListener('click', sendSuppliersToIT);
    }

    // Search functionality for supplier modal
    const searchInput = document.getElementById('modalSearchSuppliers');
    const filterSelect = document.getElementById('modalFilterByType');
    
    if (searchInput) searchInput.addEventListener('input', filterAvailableSuppliers);
    if (filterSelect) filterSelect.addEventListener('change', filterAvailableSuppliers);

    // Reviewer search
    const reviewerSearchInput = document.getElementById('assignToReviewer');
    if (reviewerSearchInput) {
        reviewerSearchInput.addEventListener('input', searchReviewers);
        reviewerSearchInput.addEventListener('focus', () => showReviewerResults(reviewerAccounts));
    }    // IT account search
    const itSearchInput = document.getElementById('itAccountSearch');
    if (itSearchInput) {
        itSearchInput.addEventListener('input', searchITAccounts);
        itSearchInput.addEventListener('focus', () => showITResults(itAccounts));
    }

    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#assignToReviewer, #reviewerSearchResults')) {
            hideReviewerResults();
        }
        if (!e.target.closest('#itAccountSearch, #itAccountSearchResults')) {
            hideITResults();
        }
    });
    
    // Display request ID in the header if available
    if (requestId !== 'Unknown') {
        const header = document.querySelector('.header-container h1');
        if (header) {
            header.textContent += ` - Request #${requestId}`;
        }
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Show send to review modal
function showSendToReviewModal() {
    if (selectedSuppliersForReview.length === 0) {
        showNotification('No suppliers selected for review. Please add suppliers first.', 'warning');
        return;
    }

    populateSelectedSuppliersList('selectedSuppliersList');
    const modal = new bootstrap.Modal(document.getElementById('sendToReviewModal'));
    modal.show();
}

// Show send to IT modal
function showSendToITModal() {
    if (selectedSuppliersForReview.length === 0) {
        showNotification('No suppliers selected for IT review. Please add suppliers first.', 'warning');
        return;
    }

    populateSelectedSuppliersList('itSelectedSuppliersList');
    const modal = new bootstrap.Modal(document.getElementById('itAccountModal'));
    modal.show();
}

// Populate selected suppliers list for modals
function populateSelectedSuppliersList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const suppliersData = availableSuppliers.filter(s => selectedSuppliersForReview.includes(s.id));
    
    const html = suppliersData.map(supplier => `
        <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div>
                <strong>${supplier.name}</strong>
                <small class="text-muted d-block">${supplier.type} - ${supplier.contact}</small>
            </div>
            <span class="badge bg-primary">${supplier.status}</span>
        </div>
    `).join('');

    container.innerHTML = html || '<p class="text-muted">No suppliers selected</p>';
}

// Send suppliers to review
function sendSuppliersToReview() {
    const reviewerInput = document.getElementById('assignToReviewer');
    const priority = document.getElementById('priority').value;

    if (!reviewerInput.value || !reviewerInput.dataset.selectedId) {
        showNotification('Please select a reviewer.', 'warning');
        return;
    }

    // Simulate sending to review
    const modal = bootstrap.Modal.getInstance(document.getElementById('sendToReviewModal'));
    modal.hide();

    showNotification(`Successfully sent ${selectedSuppliersForReview.length} suppliers to review with ${priority} priority.`, 'success');
    
    // Reset form
    reviewerInput.value = '';
    delete reviewerInput.dataset.selectedId;
    document.getElementById('priority').value = 'medium';
}

// Send suppliers to IT review
function sendSuppliersToIT() {
    const itInput = document.getElementById('itAccountSearch');
    const priority = document.getElementById('itPriority').value;
    const notes = document.getElementById('itNotes').value;

    if (!itInput.value || !itInput.dataset.selectedId) {
        showNotification('Please select an IT account.', 'warning');
        return;
    }

    // Simulate sending to IT
    const modal = bootstrap.Modal.getInstance(document.getElementById('itAccountModal'));
    modal.hide();

    showNotification(`Successfully sent ${selectedSuppliersForReview.length} suppliers to IT review with ${priority} priority.`, 'success');
    
    // Reset form
    itInput.value = '';
    delete itInput.dataset.selectedId;
    document.getElementById('itPriority').value = 'medium';
    document.getElementById('itNotes').value = '';
}

// Search reviewers
function searchReviewers() {
    const searchTerm = document.getElementById('assignToReviewer').value.toLowerCase();
    const filteredReviewers = reviewerAccounts.filter(reviewer =>
        reviewer.name.toLowerCase().includes(searchTerm) ||
        reviewer.accountNumber.toLowerCase().includes(searchTerm) ||
        reviewer.contact.toLowerCase().includes(searchTerm)
    );
    showReviewerResults(filteredReviewers);
}

// Show reviewer search results
function showReviewerResults(reviewers) {
    const resultsContainer = document.getElementById('reviewerSearchResults');
    if (!resultsContainer) return;

    if (reviewers.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }

    const html = reviewers.map(reviewer => `
        <a class="dropdown-item reviewer-option"href="index.html" data-reviewer-id="${reviewer.id}">
            <div>
                <strong>${reviewer.name}</strong>
                <small class="text-muted d-block">${reviewer.accountNumber} - ${reviewer.contact}</small>
            </div>
        </a>
    `).join('');

    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';

    // Add click handlers
    resultsContainer.querySelectorAll('.reviewer-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const reviewerId = this.dataset.reviewerId;
            const reviewer = reviewerAccounts.find(r => r.id === reviewerId);
            if (reviewer) {
                document.getElementById('assignToReviewer').value = `${reviewer.name} (${reviewer.accountNumber})`;
                document.getElementById('assignToReviewer').dataset.selectedId = reviewerId;
                hideReviewerResults();
            }
        });
    });
}

// Hide reviewer search results
function hideReviewerResults() {
    const resultsContainer = document.getElementById('reviewerSearchResults');
    if (resultsContainer) {
        resultsContainer.style.display = 'none';
    }
}

// Search IT accounts
function searchITAccounts() {
    const searchTerm = document.getElementById('itAccountSearch').value.toLowerCase();
    const filteredAccounts = itAccounts.filter(account =>
        account.name.toLowerCase().includes(searchTerm) ||
        account.department.toLowerCase().includes(searchTerm) ||
        account.specialization.toLowerCase().includes(searchTerm)
    );
    showITResults(filteredAccounts);
}

// Show IT search results
function showITResults(accounts) {
    const resultsContainer = document.getElementById('itAccountSearchResults');
    if (!resultsContainer) return;

    if (accounts.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }

    const html = accounts.map(account => `
        <a class="dropdown-item it-option"href="index.html" data-account-id="${account.id}">
            <div>
                <strong>${account.name}</strong>
                <small class="text-muted d-block">${account.department} - ${account.specialization}</small>
            </div>
        </a>
    `).join('');

    resultsContainer.innerHTML = html;
    resultsContainer.style.display = 'block';

    // Add click handlers
    resultsContainer.querySelectorAll('.it-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const accountId = this.dataset.accountId;
            const account = itAccounts.find(a => a.id === accountId);
            if (account) {
                document.getElementById('itAccountSearch').value = `${account.name} (${account.department})`;
                document.getElementById('itAccountSearch').dataset.selectedId = accountId;
                hideITResults();
            }
        });
    });
}

// Hide IT search results
function hideITResults() {
    const resultsContainer = document.getElementById('itAccountSearchResults');
    if (resultsContainer) {
        resultsContainer.style.display = 'none';
    }
}
