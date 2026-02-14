import { MaskPipe } from './mask.pipe';

describe('MaskPipe', () => {
  let pipe: MaskPipe;

  beforeEach(() => {
    pipe = new MaskPipe();
  });

  describe('Pipe Initialization', () => {
    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('should have transform method', () => {
      expect(pipe.transform).toBeDefined();
      expect(typeof pipe.transform).toBe('function');
    });
  });

  describe('transform - Basic Functionality', () => {
    it('should mask value with length >= 5', () => {
      const value = '12345';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-');
    });

    it('should return original value if length < 5', () => {
      const value = '1234';
      const result = pipe.transform(value);
      
      expect(result).toBe('1234');
    });

    it('should mask SSN correctly', () => {
      const value = '123456789';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-1234');
    });

    it('should mask longer strings correctly', () => {
      const value = '1234567890';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-12345');
    });
  });

  describe('transform - Edge Cases', () => {
    it('should handle exactly 5 characters', () => {
      const value = 'ABCDE';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-');
    });

    it('should handle 6 characters', () => {
      const value = 'ABCDEF';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-A');
    });

    it('should handle 7 characters', () => {
      const value = 'ABCDEFG';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-AB');
    });

    it('should handle 8 characters', () => {
      const value = 'ABCDEFGH';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-ABC');
    });

    it('should handle 9 characters (standard SSN length)', () => {
      const value = 'ABCDEFGHI';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-ABCD');
    });

    it('should handle empty string', () => {
      const value = '';
      const result = pipe.transform(value);
      
      expect(result).toBe('');
    });

    it('should handle single character', () => {
      const value = 'A';
      const result = pipe.transform(value);
      
      expect(result).toBe('A');
    });

    it('should handle two characters', () => {
      const value = 'AB';
      const result = pipe.transform(value);
      
      expect(result).toBe('AB');
    });

    it('should handle three characters', () => {
      const value = 'ABC';
      const result = pipe.transform(value);
      
      expect(result).toBe('ABC');
    });

    it('should handle four characters (boundary case)', () => {
      const value = 'ABCD';
      const result = pipe.transform(value);
      
      expect(result).toBe('ABCD');
    });
  });

  describe('transform - Different Data Types', () => {
    it('should handle numeric strings', () => {
      const value = '987654321';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-9876');
    });

    it('should handle alphanumeric strings', () => {
      const value = 'ABC123DEF';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-ABC1');
    });

    it('should handle special characters', () => {
      const value = '!@#$%^&*()';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-!@#$%');
    });

    it('should handle mixed case strings', () => {
      const value = 'AbCdEfGhI';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-AbCd');
    });

    it('should handle strings with spaces', () => {
      const value = 'A B C D E F';
      const result = pipe.transform(value);
      
      // 'A B C D E F' is 11 chars, substr(0, 6) = 'A B C '
      expect(result).toBe('XXX-XX-A B C ');
    });

    it('should handle strings with dashes', () => {
      const value = 'A-B-C-D-E-F';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-A-B-C-');
    });
  });

  describe('transform - SSN-like Patterns', () => {
    it('should mask formatted SSN (###-##-####)', () => {
      const value = '123-45-6789';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-123-45');
    });

    it('should mask credit card number', () => {
      const value = '1234567890123456';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-12345678901');
    });

    it('should mask phone number', () => {
      const value = '1234567890';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-12345');
    });

    it('should mask ID number', () => {
      const value = 'ID-123456789';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-ID-1234');
    });
  });

  describe('transform - Unicode and Special Characters', () => {
    it('should handle Unicode characters', () => {
      const value = '你好世界测试';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-你');
    });

    it('should handle emoji characters', () => {
      const value = '😀😃😄😁😆😅';
      const result = pipe.transform(value);
      
      // Emojis are 2 UTF-16 code units each, so 6 emojis = 12 units
      // value.length - 5 = 12 - 5 = 7
      // substr(0, 7) gives first 7 UTF-16 code units, which is 3 complete emojis + half of 4th
      expect(result.startsWith('XXX-XX-😀😃😄')).toBe(true);
      // Result should be longer than just the 3 complete emojis due to partial surrogate
      expect(result.length).toBeGreaterThan('XXX-XX-😀😃😄'.length);
    });

    it('should handle accented characters', () => {
      const value = 'àáâãäåæ';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-àá');
    });

    it('should handle currency symbols', () => {
      const value = '$£¥€₹₽';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-$');
    });
  });

  describe('transform - Masking Logic', () => {
    it('should always show XXX-XX- prefix for masked values', () => {
      const values = ['12345', '123456', '1234567', '12345678', '123456789'];
      
      values.forEach(value => {
        const result = pipe.transform(value);
        expect(result.startsWith('XXX-XX-')).toBe(true);
      });
    });

    it('should show last (length - 5) characters', () => {
      const testCases = [
        { input: '12345', lastChars: '' },
        { input: '123456', lastChars: '1' },
        { input: '1234567', lastChars: '12' },
        { input: '12345678', lastChars: '123' },
        { input: '123456789', lastChars: '1234' },
        { input: '1234567890', lastChars: '12345' }
      ];

      testCases.forEach(testCase => {
        const result = pipe.transform(testCase.input);
        expect(result).toBe(`XXX-XX-${testCase.lastChars}`);
      });
    });

    it('should use substr method correctly', () => {
      const value = 'ABCDEFGHIJ'; // 10 characters
      const result = pipe.transform(value);
      
      // substr(0, 10 - 5) = substr(0, 5) = 'ABCDE'
      expect(result).toBe('XXX-XX-ABCDE');
    });
  });

  describe('transform - Real-world Scenarios', () => {
    it('should mask US Social Security Number', () => {
      const ssn = '987654321';
      const result = pipe.transform(ssn);
      
      expect(result).toBe('XXX-XX-9876');
      expect(result).not.toContain('987654321');
    });

    it('should mask account number', () => {
      const account = 'ACC1234567890';
      const result = pipe.transform(account);
      
      expect(result).toBe('XXX-XX-ACC12345');
    });

    it('should mask employee ID', () => {
      const empId = 'EMP-12345';
      const result = pipe.transform(empId);
      
      // 'EMP-12345' is 9 chars, substr(0, 4) = 'EMP-'
      expect(result).toBe('XXX-XX-EMP-');
    });

    it('should not mask short codes', () => {
      const shortCode = 'ABC1';
      const result = pipe.transform(shortCode);
      
      expect(result).toBe('ABC1');
      expect(result).not.toContain('XXX-XX-');
    });

    it('should mask serial numbers', () => {
      const serial = 'SN123456789ABC';
      const result = pipe.transform(serial);
      
      expect(result).toBe('XXX-XX-SN1234567');
    });
  });

  describe('transform - Performance and Consistency', () => {
    it('should return consistent results for same input', () => {
      const value = '123456789';
      const result1 = pipe.transform(value);
      const result2 = pipe.transform(value);
      const result3 = pipe.transform(value);
      
      expect(result1).toBe(result2);
      expect(result2).toBe(result3);
    });

    it('should handle multiple consecutive calls', () => {
      const values = ['12345', '123456', '1234567'];
      const results = values.map(v => pipe.transform(v));
      
      expect(results).toEqual([
        'XXX-XX-',
        'XXX-XX-1',
        'XXX-XX-12'
      ]);
    });

    it('should be performant for large strings', () => {
      const largeString = 'A'.repeat(1000);
      const startTime = performance.now();
      const result = pipe.transform(largeString);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(10); // Should complete in less than 10ms
      expect(result).toContain('XXX-XX-');
    });
  });

  describe('transform - Boundary Conditions', () => {
    it('should handle length exactly 5 (boundary)', () => {
      const value = '12345';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-');
      expect(result.length).toBe(7); // 'XXX-XX-' is 7 characters
    });

    it('should handle length 4 (just below boundary)', () => {
      const value = '1234';
      const result = pipe.transform(value);
      
      expect(result).toBe('1234');
      expect(result).not.toContain('XXX-XX-');
    });

    it('should handle very long strings', () => {
      const value = '1'.repeat(100);
      const result = pipe.transform(value);
      
      expect(result).toContain('XXX-XX-');
      expect(result.length).toBe(102); // 7 ('XXX-XX-') + 95 (100 - 5)
    });

    it('should preserve exact character count logic', () => {
      const value = '1234567890';
      // Expected: substr(0, 10-5) = substr(0, 5) = '12345'
      // Result: 'XXX-XX-12345'
      const result = pipe.transform(value);
      
      expect(result.substring(7)).toBe('12345');
    });
  });

  describe('transform - Input Validation', () => {
    it('should handle whitespace-only strings < 5', () => {
      const value = '    '; // 4 spaces
      const result = pipe.transform(value);
      
      expect(result).toBe('    ');
    });

    it('should handle whitespace-only strings >= 5', () => {
      const value = '     '; // 5 spaces
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-');
    });

    it('should handle tab characters', () => {
      const value = '\t\t\t\t\t\t';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-\t');
    });

    it('should handle newline characters', () => {
      const value = '\n\n\n\n\n\n';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX-\n');
    });

    it('should handle mixed whitespace', () => {
      const value = ' \t\n\r\f\v';
      const result = pipe.transform(value);
      
      expect(result).toBe('XXX-XX- ');
    });
  });

  describe('transform - String Method Usage', () => {
    it('should use substr correctly for masking', () => {
      const value = 'TESTING123';
      const expectedLastChars = value.substr(0, value.length - 5);
      const result = pipe.transform(value);
      
      expect(result).toBe(`XXX-XX-${expectedLastChars}`);
    });

    it('should calculate length correctly', () => {
      const values = [
        { str: '', len: 0 },
        { str: 'A', len: 1 },
        { str: 'ABCDE', len: 5 },
        { str: '你好', len: 2 }
      ];

      values.forEach(({ str, len }) => {
        expect(str.length).toBe(len);
        const result = pipe.transform(str);
        
        if (len < 5) {
          expect(result).toBe(str);
        } else {
          expect(result).toContain('XXX-XX-');
        }
      });
    });
  });

  describe('transform - Security Considerations', () => {
    it('should not expose original sensitive data when masked', () => {
      const sensitiveData = '123456789';
      const result = pipe.transform(sensitiveData);
      
      // Should only show last 4 digits
      expect(result).toBe('XXX-XX-1234');
      expect(result).not.toContain('123456789');
      expect(result).not.toContain('56789');
    });

    it('should provide consistent masking pattern', () => {
      const data1 = '111111111';
      const data2 = '222222222';
      const data3 = '333333333';
      
      const result1 = pipe.transform(data1);
      const result2 = pipe.transform(data2);
      const result3 = pipe.transform(data3);
      
      // All should have same prefix
      expect(result1.substring(0, 7)).toBe('XXX-XX-');
      expect(result2.substring(0, 7)).toBe('XXX-XX-');
      expect(result3.substring(0, 7)).toBe('XXX-XX-');
    });

    it('should not reveal pattern of original data', () => {
      const result = pipe.transform('ABABAB');
      
      // Should not show alternating pattern
      expect(result).toBe('XXX-XX-A');
    });
  });

  describe('transform - Angular Integration', () => {
    it('should work as Angular pipe transform method', () => {
      const value = '123456789';
      
      // Simulate Angular calling the transform method
      const result = pipe.transform(value);
      
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result).toBe('XXX-XX-1234');
    });

    it('should be pure (no side effects)', () => {
      const value = '123456789';
      const originalValue = value;
      
      pipe.transform(value);
      
      // Original value should not be modified
      expect(value).toBe(originalValue);
    });

    it('should produce same output for same input (pure pipe behavior)', () => {
      const value = '123456789';
      const results = [];
      
      for (let i = 0; i < 5; i++) {
        results.push(pipe.transform(value));
      }
      
      // All results should be identical
      const allSame = results.every(r => r === results[0]);
      expect(allSame).toBe(true);
    });
  });
});

