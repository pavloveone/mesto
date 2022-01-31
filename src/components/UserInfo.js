class UserInfo {
    constructor({ name, job }) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
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
    }

}

export default UserInfo;