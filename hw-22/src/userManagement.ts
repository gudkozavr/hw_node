export namespace UserManagement {
    export namespace Admin {
      export class AdminUser {
        private name: string;
        private email: string;
        private isSuperAdmin: boolean;
        constructor(name: string, email: string, isSuperAdmin: boolean) {
          this.name = name;
          this.email = email;
          this.isSuperAdmin = isSuperAdmin;
        }
        switchAdminPermissions(): void {
          this.isSuperAdmin = !this.isSuperAdmin;
        }
        getIsSuperAdmin(): boolean {
          return this.isSuperAdmin;
        }
      }
    }
  }
  