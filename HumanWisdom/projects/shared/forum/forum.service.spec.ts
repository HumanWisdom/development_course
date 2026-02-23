import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ForumService } from './forum.service';
import { SharedService } from '../services/shared.service';
import { ProgramType } from '../models/program-model';
import { HttpBackend } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

describe('ForumService', () => {
  let service: ForumService;
  let httpMock: HttpTestingController;
  let mockProgramId: number;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ForumService,
        { provide: ToastrService, useValue: { success: jasmine.createSpy(), error: jasmine.createSpy() } }
      ]
    });

    service = TestBed.inject(ForumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetTagList', () => {
    it('should return tag list with 6 items', () => {
      const result = service.GetTagList();
      expect(result.length).toBe(6);
      expect(result[0]).toEqual({ value: 1, label: 'Mental Health' });
      expect(result[5]).toEqual({ value: 6, label: 'School' });
    });
  });

  describe('getposts', () => {
    it('should call GetAllPosts_Search when index 0 and searchText', () => {
      service.getposts(0, 'test', 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetAllPosts_Search'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should call GetAllPosts_Prog when index 0 and no searchText', () => {
      service.getposts(0, null, 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetAllPosts_Prog'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should call GetFollowedPosts when index 1', () => {
      service.getposts(1, null, 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetFollowedPosts'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should call GetPosts when index 2', () => {
      service.getposts(2, null, 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetPosts_Prog'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should call GetReflectionPosts when index 3', () => {
      service.getposts(3, null, 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetReflectionPosts'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });

    it('should use default url for unknown index', () => {
      service.getposts(99, null, 'user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetAllPosts_Prog'));
      req.flush([]);
    });
  });

  describe('getForumRecords', () => {
    it('should call GetAllPosts with start and end record', () => {
      service.getForumRecords(0, 10).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetAllPosts'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });

  describe('submitPost', () => {
    it('should POST to AddPost', () => {
      service.submitPost({ Post: 'test' }).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('AddPost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('reportPost', () => {
    it('should POST to ReportPost', () => {
      service.reportPost({}).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('ReportPost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('followPost', () => {
    it('should POST to FollowPost', () => {
      service.followPost({}).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('FollowPost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('likePost', () => {
    it('should POST to LikePost', () => {
      service.likePost({}).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('LikePost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('getPostDetail', () => {
    it('should GET post details', () => {
      service.getPostDetail('123').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetPostsDetails'));
      expect(req.request.method).toBe('GET');
      req.flush({});
    });
  });

  describe('getUserDetail', () => {
    it('should GET user details', () => {
      service.getUserDetail('user1').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('Users'));
      expect(req.request.method).toBe('GET');
      req.flush({});
    });
  });

  describe('UpdatePost', () => {
    it('should POST to AddPost for update', () => {
      service.UpdatePost({}).subscribe();
      const req = httpMock.expectOne(r => r.url.includes('AddPost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('deletePost', () => {
    it('should POST to DeletePost', () => {
      service.deletePost('123').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('DeletePost'));
      expect(req.request.method).toBe('POST');
      req.flush({});
    });
  });

  describe('FormatForumPostData', () => {
    it('should return empty array for null/undefined', () => {
      expect(service.FormatForumPostData(null)).toEqual([]);
      expect(service.FormatForumPostData(undefined)).toEqual([]);
    });

    it('should format posts with child array and postTime', () => {
      const data = [
        { PostID: 1, ParentPOstID: '0', PostDate: '2024-01-15T10:00:00Z' },
        { PostID: 2, ParentPOstID: '0', PostDate: '2024-01-16T10:00:00Z' }
      ];
      const result = service.FormatForumPostData(data);
      expect(result.length).toBe(2);
      expect(result[0].child).toEqual([]);
      expect(result[0].isEditPost).toBe(false);
      expect(result[0].postTime).toBeDefined();
    });

    it('should sort by PostID descending', () => {
      const data = [
        { PostID: 1, ParentPOstID: '0', PostDate: '2024-01-15T10:00:00Z' },
        { PostID: 3, ParentPOstID: '0', PostDate: '2024-01-16T10:00:00Z' },
        { PostID: 2, ParentPOstID: '0', PostDate: '2024-01-14T10:00:00Z' }
      ];
      const result = service.FormatForumPostData(data);
      expect(result[0].PostID).toBe(3);
      expect(result[1].PostID).toBe(2);
      expect(result[2].PostID).toBe(1);
    });
  });

  describe('getLocalPostDate', () => {
    it('should format date string', () => {
      const result = service.getLocalPostDate('2024-01-15T10:00:00Z');
      expect(result).toMatch(/January 15|15/);
    });

    it('should pad single digit day with zero', () => {
      const result = service.getLocalPostDate('2024-01-05T10:00:00Z');
      expect(result).toMatch(/05/);
    });
  });

  describe('getForumSearchDataSite', () => {
    it('should GET search data', () => {
      service.getForumSearchDataSite('query').subscribe();
      const req = httpMock.expectOne(r => r.url.includes('GetAllPosts_Search'));
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });
});
