class UserInfo {
    constructor({ name, job, avatar }) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        const infoInputs = {
            nameInput: this._name.textContent,
            jobInput: this._job.textContent
        }
        return infoInputs;
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._job.textContent = formData.job;
        this._userId = formData.id;
        this._avatar.src = formData.avatar;
    }

    getId() {
        return this._userId
    }

}

export default UserInfo;