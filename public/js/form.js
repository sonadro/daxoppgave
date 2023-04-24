// DOM
const uploadForm = document.querySelector('#uploadForm');
const uploadStatus = document.querySelector('#uploadStatus');

const readForm = document.querySelector('#readForm');
const readStatus = document.querySelector('#readStatus');

const updateForm = document.querySelector('#updateForm');
const updateStatus = document.querySelector('#updateStatus');

const deleteForm = document.querySelector('#deleteForm');
const deleteStatus = document.querySelector('#deleteStatus');

const allIdsForm = document.querySelector('#getAllIds');
const allIdResult = document.querySelector('#allIdResult');

// form submit - upload
uploadForm.addEventListener('submit', e => {
    e.preventDefault();

    const submittedObj = {
        input1: testForm.input1.value,
        input2: testForm.input2.value
    };

    console.log(submittedObj);

    uploadFormData(submittedObj);
});

// form submit - read
readForm.addEventListener('submit', e => {
    e.preventDefault();

    const readId = readForm.idInput.value;

    readFormData(readId);
});

// form submit - update
updateForm.addEventListener('submit', e => {
    e.preventDefault();

    const updatedDocument = {
        input1: updateForm.nyInput1.value,
        input2: updateForm.nyInput2.value
    };

    updateFormData(updatedDocument, updateForm.updateId.value);
});

// form submit - delete
deleteForm.addEventListener('submit', e => {
    e.preventDefault();

    const deleteId = deleteForm.deleteId.value;

    deleteFormData(deleteId);
});

// form submit - get all ids
allIdsForm.addEventListener('submit', e => {
    e.preventDefault();

    getAllDocumentIds();
});

// form upload
const uploadFormData = async function(object) {
    const res = await fetch('http://localhost/form-submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: object
        })
    });

    const result = await(res.json());

    uploadStatus.innerText = result.status;
};

// form read
const readFormData = async function(id) {
    const res = await fetch('http://localhost/form-read', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    });

    const result = await(res.json());

    console.log(result);

    readStatus.innerText = result.status;
};

// form update
const updateFormData = async function(document, id) {
    const res = await fetch('http://localhost/form-update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            document,
            id
        })
    });

    const result = await(res.json());

    console.log(result);

    updateStatus.innerText = result.status;
};

// form delete
const deleteFormData = async function(id) {
    const res = await fetch('http://localhost/form-delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    });

    const result = await(res.json());

    deleteStatus.innerText = result.status;
};

const getAllDocumentIds = async function() {
    const res = await fetch('http://localhost/form-getAllIds', {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify({
          parcel: 'get_ids'
       })
    });
    
    const result = await(res.json());

    allIdResult.innerText = result.status;

    console.log(...result.allIds);
};