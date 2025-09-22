"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    passWord;
    isLog;
    role;
    constructor(id, userName, passWord, isLog, role) {
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.isLog = false;
        this.role = role;
    }
    login(userName, passWord) {
        if (userName === this.userName && passWord === this.passWord) {
            console.log("Đăng nhập thành công.");
            this.isLog = true;
        }
    }
    logout() {
        if (this.isLog) {
            this.isLog = false;
            console.log(`Đăng xuất thành công`);
        }
    }
    getPassWord() {
        return this.passWord;
    }
}
class UserAcc extends Account {
    status;
    passWordUser;
    constructor(id, userName, passWord) {
        super(id, userName, passWord, false, "Người dùng");
        this.passWordUser = this.getPassWord();
        this.status = "active";
    }
    login(userName, passWord) {
        if (userName === this.userName && passWord === this.passWordUser) {
            if (this.status === "active") {
                this.isLog = true;
                console.log("Đăng nhập thành công.");
            }
            else {
                console.log(`Tài khoản đã bị vô hiệu hoá`);
            }
        }
    }
}
class Admin extends Account {
    constructor(id, userName, passWord) {
        super(id, userName, passWord, false, "Admin");
    }
    banUser(id_change) {
        if (this.isLog) {
            for (let account of listAcountUser) {
                if (account.id === id_change) {
                    account.status = "banned";
                }
            }
        }
        else {
            console.log(`Bạn chưa đăng nhập!`);
        }
    }
}
let listAcountUser = [];
let usc1 = new UserAcc("USC001", "Nguyễn Văn A", "09082006");
listAcountUser.push(usc1);
usc1.login("Nguyễn Văn A", "09082006");
usc1.logout();
let adm1 = new Admin("adm001", "Trần Văn B", "AdM0010");
adm1.login("Trần Văn B", "AdM0010");
adm1.banUser("USC001");
usc1.login("Nguyễn Văn A", "09082006");
//# sourceMappingURL=baitap5.js.map