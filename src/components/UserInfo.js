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

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.job;
        this._userId = data._id;
        this._avatar.src = data.avatar;
    }

    getId() {
        return this._userId
    }

}

export default UserInfo;