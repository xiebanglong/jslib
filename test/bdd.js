// 1. 定义行为描述
describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  describe('创建账户', () => {
    it('初始余额应为0', () => {
      expect(account.getBalance()).toBe(0);
    });
  });

  describe('存款', () => {
    it('存款金额为正数时，余额应增加', () => {
      account.deposit(100);
      expect(account.getBalance()).toBe(100);
    });

    it('存款金额为负数时，应抛出异常', () => {
      expect(() => {
        account.deposit(-100);
      }).toThrow('无效的存款金额');
    });
  });

  describe('取款', () => {
    beforeEach(() => {
      account.deposit(100);
    });

    it('取款金额小于等于余额时，余额应减少', () => {
      account.withdraw(50);
      expect(account.getBalance()).toBe(50);
    });

    it('取款金额大于余额时，应抛出异常', () => {
      expect(() => {
        account.withdraw(200);
      }).toThrow('余额不足');
    });
  });
});

// 2. 运行测试用例（失败）

// 3. 实现功能代码
class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('无效的存款金额');
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('余额不足');
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

// 4. 运行测试用例（成功）
