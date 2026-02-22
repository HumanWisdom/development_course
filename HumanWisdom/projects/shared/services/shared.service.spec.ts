import { SharedService, UrlConstant } from './shared.service';
import { ProgramType } from '../models/program-model';
import { Constant } from './constant';
import { Platform } from '@angular/cdk/platform';

describe('SharedService', () => {
  let originalProgramId: any;

  beforeEach(() => {
    originalProgramId = SharedService.ProgramId;
    localStorage.clear();
    sessionStorage.clear();
  });

  afterEach(() => {



    
    SharedService.setProgramId(originalProgramId as any);
  });

  describe('isAdultProgram', () => {
    it('should return true when ProgramId is Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      expect(SharedService.isAdultProgram()).toBe(true);
    });

    it('should return false when ProgramId is Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      expect(SharedService.isAdultProgram()).toBe(false);
    });
  });

  describe('setDataInLocalStorage / getDataFromLocalStorage', () => {
    it('should set and get value from localStorage', () => {
      SharedService.setDataInLocalStorage('testKey', 'testValue');
      expect(SharedService.getDataFromLocalStorage('testKey')).toBe('testValue');
    });

    it('should not set when key is null', () => {
      SharedService.setDataInLocalStorage(null, 'value');
      expect(localStorage.getItem(null)).toBeNull();
    });

    it('should return null when key is null', () => {
      expect(SharedService.getDataFromLocalStorage(null)).toBeNull();
    });
  });

  describe('setDataInSessionStorage / getDataFromSessionStorage', () => {
    it('should set and get value from sessionStorage', () => {
      SharedService.setDataInSessionStorage('key', 'value');
      expect(SharedService.getDataFromSessionStorage('key')).toBe('value');
    });

    it('should return null when key is null', () => {
      expect(SharedService.getDataFromSessionStorage(null)).toBeNull();
    });
  });

  describe('getPartnerInfo', () => {
    it('should return partner value when isPartner exists', () => {
      localStorage.setItem('isPartner', '1');
      expect(SharedService.getPartnerInfo()).toBe('1');
    });

    it('should return "0" when isPartner does not exist', () => {
      expect(SharedService.getPartnerInfo()).toBe('0');
    });
  });

  describe('isSubscriber', () => {
    it('should return true when Subscriber is "1"', () => {
      SharedService.setDataInLocalStorage(Constant.subscriber, '1');
      expect(SharedService.isSubscriber()).toBe(true);
    });

    it('should return false when Subscriber is not "1"', () => {
      SharedService.setDataInLocalStorage(Constant.subscriber, '0');
      expect(SharedService.isSubscriber()).toBe(false);
    });
  });

  describe('isLoggedIn', () => {
    it('should return true when isloggedin is "T"', () => {
      SharedService.setDataInLocalStorage('isloggedin', 'T');
      expect(SharedService.isLoggedIn()).toBe(true);
    });

    it('should return false when isloggedin is not "T"', () => {
      SharedService.setDataInLocalStorage('isloggedin', 'F');
      expect(SharedService.isLoggedIn()).toBe(false);
    });
  });

  describe('GetExerciseClassName', () => {
    const visitedScreens = [
      { ScreenNo: 'p1' },
      { ScreenNo: 'p2' }
    ];

    it('should return "editable" when currentDay matches day', () => {
      const result = SharedService.GetExerciseClassName('p1', 1, visitedScreens, 2);
      expect(result).toContain('editable');
    });

    it('should return "uneditable" when day is in visitedScreens', () => {
      const result = SharedService.GetExerciseClassName('p1', 2, visitedScreens, 2);
      expect(result).toContain('uneditable');
    });

    it('should return "active" when nextDay matches dayclass', () => {
      const result = SharedService.GetExerciseClassName('p1', 2, visitedScreens, 1);
      expect(result).toContain('active');
    });

    it('should return "inactive" when applicable', () => {
      const result = SharedService.GetExerciseClassName('p3', 2, visitedScreens, 2);
      expect(result).toContain('inactive');
    });
  });

  describe('DisabledComment', () => {
    it('should return true when TagIds is 5 and RoleID is not 1', () => {
      SharedService.setDataInLocalStorage('RoleID', '2');
      expect(SharedService.DisabledComment({ TagIds: '5', TagName: 'Other' })).toBe(true);
    });

    it('should return true when TagName is "Ask a coach" and RoleID is not 1', () => {
      SharedService.setDataInLocalStorage('RoleID', '2');
      expect(SharedService.DisabledComment({ TagIds: '1', TagName: 'Ask a coach' })).toBe(true);
    });

    it('should return false when RoleID is 1', () => {
      SharedService.setDataInLocalStorage('RoleID', '1');
      expect(SharedService.DisabledComment({ TagIds: '5', TagName: 'Ask a coach' })).toBe(false);
    });
  });

  describe('initializeIosCheck', () => {
    it('should return true when platform.IOS is true', () => {
      const mockPlatform = { IOS: true, SAFARI: false } as Platform;
      expect(SharedService.initializeIosCheck(mockPlatform)).toBe(true);
    });

    it('should return true when platform.SAFARI is true', () => {
      const mockPlatform = { IOS: false, SAFARI: true } as Platform;
      expect(SharedService.initializeIosCheck(mockPlatform)).toBe(true);
    });
  });

  describe('formatToDecimal', () => {
    it('should format integer with .00', () => {
      expect(SharedService.formatToDecimal(5)).toBe('5.00');
    });

    it('should format decimal to 2 places', () => {
      expect(SharedService.formatToDecimal(3.14159)).toBe('3.14');
    });
  });

  describe('setProgramId / getprogramName', () => {
    it('should return "adults" when ProgramId is Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      expect(SharedService.getprogramName()).toBe('adults');
    });

    it('should return "teenagers" when ProgramId is Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      expect(SharedService.getprogramName()).toBe('teenagers');
    });

    it('should return "youngadults" when ProgramId is Young_Adults', () => {
      SharedService.setProgramId(ProgramType.Young_Adults as any);
      expect(SharedService.getprogramName()).toBe('youngadults');
    });

    it('should return "adults" as default for unknown ProgramId', () => {
      SharedService.setProgramId(999 as any);
      expect(SharedService.getprogramName()).toBe('adults');
    });
  });

  describe('getDashboardUrls', () => {
    it('should return /adults/home for Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      expect(SharedService.getDashboardUrls()).toBe('/adults/home');
    });

    it('should return /teenagers/home for Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      expect(SharedService.getDashboardUrls()).toBe('/teenagers/home');
    });

    it('should return /teenagers/teenager-dashboard for Young_Adults', () => {
      SharedService.setProgramId(ProgramType.Young_Adults as any);
      expect(SharedService.getDashboardUrls()).toBe('/teenagers/teenager-dashboard');
    });
  });

  describe('getUrlfromFeatureName', () => {
    it('should return adults path for Adults program', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      expect(SharedService.getUrlfromFeatureName(UrlConstant.journal)).toBe('/adults/journal');
    });

    it('should return teenagers path for Teenagers program', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      expect(SharedService.getUrlfromFeatureName(UrlConstant.forum)).toBe('/teenagers/forum');
    });

    it('should return /adults/journal for Young_Adults program', () => {
      SharedService.setProgramId(ProgramType.Young_Adults as any);
      expect(SharedService.getUrlfromFeatureName(UrlConstant.journal)).toBe('/adults/journal');
    });
  });

  describe('getPreferenceData', () => {
    it('should return Adults preference data when ProgramId is Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      const data = SharedService.getPreferenceData();
      expect(data).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
      expect(data.find((d) => d.id === '999' && d.displayName === 'All')).toBeDefined();
    });

    it('should return Teenagers preference data when ProgramId is Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      const data = SharedService.getPreferenceData();
      expect(data).toBeDefined();
      expect(data.find((d) => d.id === '10' && d.displayName === 'Mental health')).toBeDefined();
    });
  });

  describe('getPreferenceDataForHome', () => {
    it('should return different data for Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      const data = SharedService.getPreferenceDataForHome();
      expect(data.some((d) => d.name === 'Manage your mental health')).toBe(true);
    });

    it('should return Adults data for Adults program', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      const data = SharedService.getPreferenceDataForHome();
      expect(data.some((d) => d.name === 'Work and leadership')).toBe(true);
    });
  });

  describe('contentIdData', () => {
    it('should return adult content for Adults program', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      const result = SharedService.contentIdData('mental-health');
      expect(result).toBeDefined();
      expect(result.id).toBe(4);
      expect(result.name).toBe('mental-health');
    });

    it('should return teenager content for Teenagers program', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      const result = SharedService.contentIdData('teenager-dashboard');
      expect(result).toBeDefined();
      expect(result.id).toBe(2);
    });

    it('should return undefined for non-existent name', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      const result = SharedService.contentIdData('non-existent');
      expect(result).toBeUndefined();
    });
  });

  describe('contentIdDataUsingTitle', () => {
    it('should return content by title for Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      const result = SharedService.contentIdDataUsingTitle('Manage your mental health');
      expect(result).toBeDefined();
      expect(result.title).toBe('Manage your mental health');
    });
  });

  describe('setUserId / getUserId', () => {
    it('should set and get userId from localStorage', () => {
      SharedService.setDataInLocalStorage(Constant.userId, '123');
      expect(SharedService.getUserId()).toBe(123);
    });

    it('should return 0 when userId is not set', () => {
      expect(SharedService.getUserId()).toBe(0);
    });
  });

  describe('setUsername / getUserName', () => {
    it('should set and get username', () => {
      SharedService.setUsername('john_doe');
      expect(SharedService.getUserName()).toBe('john_doe');
    });

    it('should return empty string when username not set', () => {
      expect(SharedService.getUserName()).toBe('');
    });
  });

  describe('setEmail / getEmail', () => {
    it('should set and get email', () => {
      SharedService.setEmail('test@example.com');
      expect(SharedService.getEmail()).toBe('test@example.com');
    });
  });

  describe('FnName', () => {
    it('should return FnName from localStorage when set', () => {
      SharedService.setDataInLocalStorage('FnName', 'John');
      expect(SharedService.FnName()).toBe('John');
    });

    it('should return first word of name when FnName not set', () => {
      SharedService.setDataInLocalStorage('name', 'John Doe');
      expect(SharedService.FnName()).toBe('John');
    });

    it('should return empty string when neither set', () => {
      expect(SharedService.FnName()).toBe('');
    });
  });

  describe('safeJsonParse', () => {
    it('should return null for null or empty', () => {
      expect(SharedService.safeJsonParse(null)).toBeNull();
      expect(SharedService.safeJsonParse('')).toBeNull();
      expect(SharedService.safeJsonParse('null')).toBeNull();
      expect(SharedService.safeJsonParse('undefined')).toBeNull();
    });

    it('should parse valid JSON object', () => {
      expect(SharedService.safeJsonParse('{"a":1}')).toEqual({ a: 1 });
    });

    it('should parse valid JSON array', () => {
      expect(SharedService.safeJsonParse('[1,2,3]')).toEqual([1, 2, 3]);
    });

    it('should return number for numeric string', () => {
      expect(SharedService.safeJsonParse('42')).toBe(42);
    });

    it('should return plain string as-is', () => {
      expect(SharedService.safeJsonParse('hello')).toBe('hello');
    });

    it('should return value as string when parse fails', () => {
      const result = SharedService.safeJsonParse('{ invalid }');
      expect(result).toBe('{ invalid }');
    });
  });

  describe('getScreenConfiguration', () => {
    it('should return SoundCapes config when name is SoundCapes', () => {
      const config = SharedService.getScreenConfiguration('SoundCapes');
      expect(config).toBeDefined();
      expect(config.moduleName).toBe('Soundscapes');
      expect(config.preferenceData).toBeDefined();
      expect(config.apiMethod).toBe('getSoundsCapesList');
    });

    it('should return undefined for unknown name', () => {
      const config = SharedService.getScreenConfiguration('Unknown');
      expect(config).toBeUndefined();
    });
  });

  describe('getDashboardId', () => {
    it('should return 4 for mental-health type in Adults', () => {
      SharedService.setProgramId(ProgramType.Adults as any);
      expect(SharedService.getDashboardId('mental-health')).toBe(4);
    });

    it('should return 4 for mental-health type in Teenagers', () => {
      SharedService.setProgramId(ProgramType.Teenagers as any);
      expect(SharedService.getDashboardId('mental-health')).toBe(4);
    });
  });
});
