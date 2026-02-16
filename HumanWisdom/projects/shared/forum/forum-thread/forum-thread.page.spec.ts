import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of, throwError, Subject, BehaviorSubject } from 'rxjs';
import { ForumThreadPage } from './forum-thread.page';
import { ForumService } from '../forum.service';
import { LogEventService } from '../../services/log-event.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ModalService } from '../../services/modal.service';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../../shared/services/constant';
import { ProgramType } from '../../models/program-model';
import { ToastrService } from 'ngx-toastr';

describe('ForumThreadPage', () => {
  let component: ForumThreadPage;
  let fixture: ComponentFixture<ForumThreadPage>;
  let mockForumService: jasmine.SpyObj<ForumService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockModalService: jasmine.SpyObj<ModalService>;
  let routerEventsSubject: Subject<any>;
  let postdataSource: BehaviorSubject<any>;

  const mockPostData = {
    ParentPost: [{
      ParentPostID: '123',
      ParentPost: 'Test Post Content',
      ParentPostDate: '2024-01-01T00:00:00',
      ParentPostLikeCount: '10',
      ParentPostReplyCount: '5',
      ParentPostUserName: 'Test User',
      Followed: '1',
      Liked: '0',
      ParentPostUserID: '107',
      ParentPostAnonymous: '0',
      ParentPostTagName: 'Mental Health',
      ParentPostImagePath: '/test/image.jpg',
      TagIds: '1,2'
    }],
    ReplyPost: [
      {
        ReplyPostID: '456',
        ReplyPost: 'Test Reply',
        ReplyPostUserID: '108',
        ReplyPostLikeCount: '3',
        Liked: '0',
        ReplyPostDate: '2024-01-02T00:00:00'
      }
    ]
  };

  const mockPostThread = {
    PostID: '123',
    POST: 'Test Post Content',
    PostDate: '2024-01-01T00:00:00',
    ParentPOstID: '',
    PostLikeCount: '10',
    ReplyCount: '5',
    UserImage: null,
    UserName: 'Test User',
    Followed: '1',
    Liked: '0',
    UserId: '107',
    Anonymous: '0',
    TagName: 'Mental Health',
    ImagePath: '/test/image.jpg',
    isEditPost: false,
    TagIds: '1,2'
  };

  beforeEach(waitForAsync(() => {
    // Create router events subject
    routerEventsSubject = new Subject<any>();
    
    // Create postdataSource BehaviorSubject
    postdataSource = new BehaviorSubject<any>(null);

    // Create spy objects
    mockForumService = jasmine.createSpyObj('ForumService', [
      'getPostDetail',
      'likePost',
      'submitPost',
      'UpdatePost',
      'deletePost',
      'reportPost',
      'followPost',
      'getLocalPostDate'
    ], {
      postdataSource: postdataSource,
      postdatavalue: postdataSource.asObservable(),
      toastrService: jasmine.createSpyObj('ToastrService', ['success', 'error'])
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      events: routerEventsSubject.asObservable(),
      url: '/forum/forum-thread/123'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
      extras: { state: { programType: ProgramType.Adults } }
    });

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('123')
        }
      }
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['goBack']);
    mockModalService = jasmine.createSpyObj('ModalService', ['openModal', 'closeModal']);

    // Setup default return values
    mockForumService.getPostDetail.and.returnValue(of(mockPostData));
    mockForumService.likePost.and.returnValue(of('11'));
    mockForumService.submitPost.and.returnValue(of({ PostID: '789' }));
    mockForumService.UpdatePost.and.returnValue(of({ success: true }));
    mockForumService.deletePost.and.returnValue(of('1'));
    mockForumService.reportPost.and.returnValue(of({ success: true }));
    mockForumService.followPost.and.returnValue(of('1'));
    mockForumService.getLocalPostDate.and.returnValue('January 01');
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());
    mockNavigationService.goBack.and.returnValue('/forum/forum-landing');

    // Mock SharedService static methods
    spyOn(SharedService, 'setDataInLocalStorage');
    spyOn(SharedService, 'getUrlfromFeatureName').and.returnValue('/forum/forum-thread-start-new');
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'DisabledComment').and.returnValue(false);
    
    // Mock ProgramId
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      const storage: { [key: string]: string } = {
        'userId': '107',
        'shareToken': 'test-token',
        'name': 'Test User',
        'isloggedin': 'T'
      };
      return storage[key] || null;
    });
    spyOn(localStorage, 'setItem');

    TestBed.configureTestingModule({
      declarations: [ForumThreadPage],
      providers: [
        { provide: ForumService, useValue: mockForumService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: ModalService, useValue: mockModalService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (component.sub) {
      component.sub.unsubscribe();
    }
    fixture.destroy();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with default values', () => {
      expect(component.isPostEditable).toBe(true);
      expect(component.replyflag).toBe(false);
      expect(component.commentflag).toBe(false);
      expect(component.isLoggedIn).toBe(true);
      expect(component.enableAlert).toBe(false);
      expect(component.isEditPost).toBe(false);
      expect(component.isProcessing).toBe(false);
      expect(component.isAdults).toBe(true);
    });

    it('should set userID from localStorage', () => {
      expect(component.userID).toBe('107');
    });

    it('should set UserName from localStorage', () => {
      expect(component.UserName).toBe('Test User');
    });

    it('should set isLoggedIn from localStorage', () => {
      expect(component.isLoggedIn).toBe(true);
    });

    it('should set sharedPostId from route params', () => {
      expect(component.sharedPostId).toBe('123');
    });

    it('should set isAdults based on SharedService.ProgramId', () => {
      expect(component.isAdults).toBe(true);
    });
  });

  describe('ngOnInit()', () => {
    it('should call getPostData on init', () => {
      spyOn(component, 'getPostData');
      component.ngOnInit();
      expect(component.getPostData).toHaveBeenCalled();
    });

    it('should set navigation data in localStorage', () => {
      component.ngOnInit();
      expect(SharedService.setDataInLocalStorage).toHaveBeenCalledWith(
        Constant.NaviagtedFrom,
        mockRouter.url
      );
    });
  });

  describe('getPostData()', () => {
    it('should fetch post data when sharedPostId exists', fakeAsync(() => {
      component.sharedPostId = '123';
      component.getPostData();
      tick();

      expect(mockForumService.getPostDetail).toHaveBeenCalledWith('123');
      expect(component.list).toEqual(mockPostData);
      expect(component.list.ReplyPost).toBeDefined();
    }));

    it('should call reploadpage when sharedPostId is empty', () => {
      component.sharedPostId = '';
      spyOn(component, 'reploadpage');
      component.getPostData();
      expect(component.reploadpage).toHaveBeenCalled();
    });

    it('should call reploadpage when sharedPostId is null', () => {
      component.sharedPostId = null;
      spyOn(component, 'reploadpage');
      component.getPostData();
      expect(component.reploadpage).toHaveBeenCalled();
    });

    it('should set value for parent post when data is received', fakeAsync(() => {
      component.sharedPostId = '123';
      component.getPostData();
      tick();

      expect(component.posttread.PostID).toBe('123');
      expect(component.posttread.POST).toBe('Test Post Content');
      expect(component.posttread.UserName).toBe('Test User');
    }));

    it('should handle error when getPostDetail fails', fakeAsync(() => {
      mockForumService.getPostDetail.and.returnValue(throwError(() => new Error('Error')));
      component.sharedPostId = '123';
      
      // Component doesn't handle errors, so we need to catch the error
      try {
        component.getPostData();
        tick();
      } catch (error) {
        // Expected - component doesn't handle errors
      }
      
      // Verify the service was called even if it errors
      expect(mockForumService.getPostDetail).toHaveBeenCalledWith('123');
    }));
  });

  describe('setValueForParentPost()', () => {
    it('should set posttread values from parent post', () => {
      const parentPost = {
        ParentPostID: '123',
        ParentPost: 'Test Post',
        ParentPostDate: '2024-01-01',
        ParentPostLikeCount: '10',
        ParentPostReplyCount: '5',
        ParentPostUserName: 'User',
        Followed: '1',
        Liked: '0',
        ParentPostUserID: '107',
        ParentPostAnonymous: '0',
        ParentPostTagName: 'Tag',
        ParentPostImagePath: '/path',
        TagIds: '1,2'
      };

      component.setValueForParentPost(parentPost);

      expect(component.posttread.PostID).toBe('123');
      expect(component.posttread.POST).toBe('Test Post');
      expect(component.posttread.UserName).toBe('User');
      expect(component.posttread.TagIds).toBe('1,2');
    });
  });

  describe('enableCommentTextBox()', () => {
    it('should reset isReportPost and PostComment', () => {
      component.isReportPost = true;
      component.PostComment = 'test';
      component.isLoggedIn = true;

      component.enableCommentTextBox();

      expect(component.isReportPost).toBe(false);
      expect(component.PostComment).toBe('');
      expect(component.isEditComment).toBe(true);
    });

    it('should not set isEditComment when not logged in', () => {
      component.isLoggedIn = false;
      component.isEditComment = false;

      component.enableCommentTextBox();

      expect(component.isEditComment).toBe(false);
    });
  });

  describe('DisabledComment()', () => {
    it('should call SharedService.DisabledComment', () => {
      const item = { PostID: '123' };
      component.DisabledComment(item);
      expect(SharedService.DisabledComment).toHaveBeenCalledWith(item);
    });
  });

  describe('toggle()', () => {
    it('should toggle replyflag when logged in', () => {
      component.isLoggedIn = true;
      component.replyflag = false;
      const item = { PostID: '123' };

      component.toggle(item);

      expect(component.replyflag).toBe(true);
      expect(component.activereply).toBe(item);
    });

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = { PostID: '123' };

      component.toggle(item);

      expect(component.enableAlert).toBe(true);
      expect(component.replyflag).toBe(false);
    });
  });

  describe('toggleDropdown()', () => {
    it('should toggle dropdown index', () => {
      component.openDropdownIndex = null;
      component.toggleDropdown(1);
      expect(component.openDropdownIndex).toBe(1);

      component.toggleDropdown(1);
      expect(component.openDropdownIndex).toBe(null);
    });

    it('should stop event propagation when event is provided', () => {
      const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
      component.toggleDropdown(1, event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });

  describe('onEditClick()', () => {
    it('should open edit post modal', () => {
      const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
      const item = { PostID: '123', POST: 'Test' };
      component.openDropdownIndex = 1;

      spyOn(component, 'openEditPostModal');
      component.onEditClick(event, item, 0);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.openEditPostModal).toHaveBeenCalledWith(item, 0, event);
      expect(component.openDropdownIndex).toBe(null);
    });
  });

  describe('onDeleteClick()', () => {
    it('should call deletePost', () => {
      const event = jasmine.createSpyObj('Event', ['stopPropagation', 'preventDefault']);
      const item = { PostID: '123' };

      spyOn(component, 'deletePost');
      component.onDeleteClick(event, item);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.deletePost).toHaveBeenCalled();
    });
  });

  describe('onDocumentClick()', () => {
    it('should close dropdown when clicking outside', () => {
      component.openDropdownIndex = 1;
      const target = document.createElement('div');
      const event = { target } as any;

      component.onDocumentClick(event);

      expect(component.openDropdownIndex).toBe(null);
    });

    it('should not close dropdown when clicking inside dropdown', () => {
      component.openDropdownIndex = 1;
      const dropdown = document.createElement('div');
      dropdown.className = 'dropdown';
      const target = document.createElement('div');
      dropdown.appendChild(target);
      const event = { target } as any;
      
      spyOn(target, 'closest').and.returnValue(dropdown);

      component.onDocumentClick(event);

      expect(component.openDropdownIndex).toBe(1);
    });
  });

  describe('openEditPostModal()', () => {
    it('should set editing properties and open modal', () => {
      const item = { PostID: '123', POST: 'Test Post', TagIds: '1,2' };
      const event = {} as Event;

      component.openEditPostModal(item, 0, event);

      expect(component.editingItem).toBe(item);
      expect(component.editingPostIndex).toBe(0);
      expect(component.editingPostText).toBe('Test Post');
      expect(mockModalService.openModal).toHaveBeenCalledWith('edit_post', event);
    });

    it('should handle item with Post property', () => {
      const item = { PostID: '123', Post: 'Test Post Alt', TagIds: '1,2' };
      component.openEditPostModal(item, 1);

      expect(component.editingPostText).toBe('Test Post Alt');
    });

    it('should handle item with no POST or Post', () => {
      const item = { PostID: '123', TagIds: '1,2' };
      component.openEditPostModal(item, 0);

      expect(component.editingPostText).toBe('');
    });
  });

  describe('closeEditPostModal()', () => {
    it('should close modal and reset editing properties', () => {
      component.editingItem = { PostID: '123' };
      component.editingPostIndex = 0;
      component.editingPostText = 'Test';

      component.closeEditPostModal();

      expect(mockModalService.closeModal).toHaveBeenCalledWith('edit_post');
      expect(component.editingItem).toBe(null);
      expect(component.editingPostIndex).toBe(null);
      expect(component.editingPostText).toBe('');
    });
  });

  describe('saveEditedPost()', () => {
    it('should update post when editingItem exists', fakeAsync(() => {
      component.editingItem = { PostID: '123', UserId: '107', TagIds: '1,2' };
      component.editingPostText = 'Updated Post';
      component.posttread.POST = 'Old Post';

      component.saveEditedPost();
      tick();

      expect(mockForumService.UpdatePost).toHaveBeenCalled();
      expect(component.posttread.POST).toBe('Updated Post');
      expect(component.posttread.isEditPost).toBe(false);
    }));

    it('should not update when editingItem is null', () => {
      component.editingItem = null;
      component.saveEditedPost();

      expect(mockForumService.UpdatePost).not.toHaveBeenCalled();
    });

    it('should trim whitespace from editingPostText', fakeAsync(() => {
      component.editingItem = { PostID: '123', UserId: '107', TagIds: '1,2' };
      component.editingPostText = '  Updated Post  ';

      component.saveEditedPost();
      tick();

      const callArgs = mockForumService.UpdatePost.calls.mostRecent().args[0];
      expect(callArgs.Post).toBe('Updated Post');
    }));
  });

  describe('navi()', () => {
    it('should navigate to forum thread start new page', () => {
      component.posttread.PostID = '123';
      component.navi();

      expect(localStorage.setItem).toHaveBeenCalledWith('postid', '123');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/forum/forum-thread-start-new');
    });
  });

  describe('routeToLanding()', () => {
    it('should navigate back using navigationService', () => {
      mockNavigationService.goBack.and.returnValue('/forum/forum-landing');
      component.routeToLanding();

      expect(mockNavigationService.goBack).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/forum/forum-landing']);
    });

    it('should use location.back when navigationService returns null', () => {
      mockNavigationService.goBack.and.returnValue(null);
      component.routeToLanding();

      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('like()', () => {
    it('should like post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.posttread.Liked = '0';
      component.posttread.PostLikeCount = '10';

      component.like('123', 0);
      tick();

      expect(mockForumService.likePost).toHaveBeenCalledWith({ PostID: '123', UserID: '107' });
      expect(component.posttread.PostLikeCount).toBe('11');
      expect(component.posttread.Liked).toBe('1');
    }));

    it('should unlike post when already liked', fakeAsync(() => {
      component.isLoggedIn = true;
      component.posttread.Liked = '1';
      component.posttread.PostLikeCount = '10';

      component.like('123', 0);
      tick();

      expect(component.posttread.Liked).toBe('0');
    }));

    it('should update reply post like count when ParentPOstID is provided', fakeAsync(() => {
      component.isLoggedIn = true;
      component.list = {
        ReplyPost: [
          { ReplyPostID: '456', ReplyPostLikeCount: '5', Liked: '0' }
        ]
      };

      component.like('456', 0, '123');
      tick();

      expect(component.list.ReplyPost[0].ReplyPostLikeCount).toBe('11');
      expect(component.list.ReplyPost[0].Liked).toBe('1');
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;

      component.like('123', 0);

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.likePost).not.toHaveBeenCalled();
    });
  });

  describe('share()', () => {
    it('should call shareOnThread with PostID', () => {
      component.sharedPostId = '123';
      spyOn(component, 'shareOnThread');

      component.share();

      expect(component.shareOnThread).toHaveBeenCalledWith({ PostID: '123' });
    });
  });

  describe('onChange()', () => {
    it('should update post', fakeAsync(() => {
      component.posttread = { ...mockPostThread };
      component.isEditPost = true;

      component.onChange({});
      tick();

      expect(component.isEditPost).toBe(false);
      expect(mockForumService.UpdatePost).toHaveBeenCalled();
      expect(mockForumService.toastrService.success).toHaveBeenCalledWith('', 'Updated Successfully');
    }));
  });

  describe('editComment()', () => {
    it('should set editCommentId', () => {
      component.editComment('456');
      expect(component.editCommentId).toBe('456');
    });
  });

  describe('getAlertcloseEvent()', () => {
    it('should close alert on cancel', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('cancel');
      expect(component.enableAlert).toBe(false);
    });

    it('should navigate to login on confirm', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('confirm');
      expect(component.enableAlert).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  describe('onChangeComment()', () => {
    it('should update comment', fakeAsync(() => {
      const item = {
        ReplyPostID: '456',
        ReplyPost: 'Test Comment',
        ReplyPostUserID: '107'
      };
      component.editCommentId = '456';

      component.onChangeComment(item);
      tick();

      expect(component.editCommentId).toBe('');
      expect(mockForumService.UpdatePost).toHaveBeenCalled();
      expect(mockForumService.toastrService.success).toHaveBeenCalledWith('', 'Updated Successfully !');
    }));
  });

  describe('editPost()', () => {
    it('should update post', fakeAsync(() => {
      component.posttread = { ...mockPostThread };
      component.posttread.isEditPost = true;

      component.editPost();
      tick();

      expect(component.posttread.isEditPost).toBe(false);
      expect(mockForumService.UpdatePost).toHaveBeenCalled();
      expect(component.posttread.POST).toBe('Test Post Content');
    }));
  });

  describe('reploadpage()', () => {
    it('should subscribe to postdataSource and load post data', fakeAsync(() => {
      component.list = null;
      postdataSource.next(mockPostThread);

      component.reploadpage();
      tick();

      expect(component.posttread).toEqual(mockPostThread);
      expect(component.sharedPostId).toBe('123');
      expect(mockForumService.getPostDetail).toHaveBeenCalledWith('123');
    }));

    it('should set isPostEditable to false when replies exist', fakeAsync(() => {
      const postDataWithReplies = {
        ...mockPostData,
        ReplyPost: [{ ReplyPostID: '456' }]
      };
      mockForumService.getPostDetail.and.returnValue(of(postDataWithReplies));
      postdataSource.next(mockPostThread);

      component.reploadpage();
      tick();

      expect(component.isPostEditable).toBe(false);
    }));

    it('should set isPostEditable to true when no replies', fakeAsync(() => {
      const postDataNoReplies = {
        ...mockPostData,
        ReplyPost: []
      };
      mockForumService.getPostDetail.and.returnValue(of(postDataNoReplies));
      postdataSource.next(mockPostThread);

      component.reploadpage();
      tick();

      expect(component.isPostEditable).toBe(true);
    }));
  });

  describe('deletePost()', () => {
    it('should delete post and navigate to forum', fakeAsync(() => {
      component.posttread.PostID = '123';
      component.deletePost();
      tick();

      expect(mockForumService.deletePost).toHaveBeenCalledWith('123');
      expect(mockForumService.toastrService.success).toHaveBeenCalledWith('', 'Deleted Successfully !');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/forum']);
    }));

    it('should show error when delete fails', fakeAsync(() => {
      mockForumService.deletePost.and.returnValue(of('0'));
      component.posttread.PostID = '123';

      component.deletePost();
      tick();

      expect(mockForumService.toastrService.error).toHaveBeenCalledWith('', 'Error!');
    }));
  });

  describe('deleteComment()', () => {
    it('should delete comment and reload page', fakeAsync(() => {
      spyOn(component, 'reploadpage');
      component.deleteComment('456');
      tick();

      expect(mockForumService.deletePost).toHaveBeenCalledWith('456');
      expect(mockForumService.toastrService.success).toHaveBeenCalledWith('', 'Deleted Successfully !');
      expect(component.reploadpage).toHaveBeenCalled();
    }));
  });

  describe('onFocusOut()', () => {
    it('should report post successfully', fakeAsync(() => {
      component.posttread.PostID = '123';
      component.userID = '107';
      component.commenttext = 'Report comment';
      component.replyflag = true;
      spyOn(component, 'reploadpage');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.onFocusOut();
      tick();

      expect(mockForumService.reportPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107',
        Comment: 'Report comment'
      });
      expect(component.replyflag).toBe(false);
      expect(component.commenttext).toBe('');
      expect(component.submissionState).toBe('success');
      expect(component.modalText).toBe('submitted successfully.');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should handle error when reporting fails', fakeAsync(() => {
      mockForumService.reportPost.and.returnValue(throwError('Error'));
      component.posttread.PostID = '123';
      component.userID = '107';
      spyOn(component, 'openPostedSuccessfullyModal');

      component.onFocusOut();
      tick();

      expect(component.submissionState).toBe('error');
      expect(component.modalText).toBe('Something went wrong. Please try again.');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));
  });

  describe('replyPost()', () => {
    it('should sort reply posts by ReplyPostID descending', () => {
      component.list = {
        ReplyPost: [
          { ReplyPostID: '100' },
          { ReplyPostID: '300' },
          { ReplyPostID: '200' }
        ]
      };

      const result = component.replyPost();

      expect(result[0].ReplyPostID).toBe('300');
      expect(result[1].ReplyPostID).toBe('200');
      expect(result[2].ReplyPostID).toBe('100');
    });
  });

  describe('refreshPage()', () => {
    it('should refresh post data', fakeAsync(() => {
      const refreshedData = {
        ...mockPostData,
        ParentPost: [{
          ...mockPostData.ParentPost[0],
          Liked: '1',
          PostLikeCount: '15'
        }]
      };
      mockForumService.getPostDetail.and.returnValue(of(refreshedData));
      component.posttread.Liked = '0';
      component.posttread.PostLikeCount = '10';

      component.refreshPage('123');
      tick();

      expect(component.posttread.Liked).toBe('1');
      expect(component.posttread.PostLikeCount).toBe('15');
      expect(component.list).toEqual(refreshedData);
    }));
  });

  describe('reloadthread()', () => {
    it('should reload thread with new item', fakeAsync(() => {
      const item = { ReplyPostID: '456', POST: 'New Thread' };
      component.sub = postdataSource.subscribe(() => {});
      spyOn(component, 'reploadpage');
      const nextSpy = spyOn(postdataSource, 'next');

      component.reloadthread(item);
      tick();

      expect(component.sub.closed).toBe(true);
      expect(nextSpy).toHaveBeenCalled();
      expect(component.reploadpage).toHaveBeenCalled();
    }));
  });

  describe('ngOnDestroy()', () => {
    it('should unsubscribe from subscription if exists', () => {
      component.sub = postdataSource.subscribe(() => {});
      const unsubscribeSpy = spyOn(component.sub, 'unsubscribe');

      component.ngOnDestroy();

      expect(unsubscribeSpy).toHaveBeenCalled();
    });

    it('should not throw error if subscription does not exist', () => {
      component.sub = undefined;
      expect(() => component.ngOnDestroy()).not.toThrow();
    });
  });

  describe('reportpost()', () => {
    it('should set isReportPost when logged in', () => {
      component.isLoggedIn = true;
      component.isEditComment = true;
      component.PostComment = 'test';

      component.reportpost();

      expect(component.isEditComment).toBe(false);
      expect(component.PostComment).toBe('');
      expect(component.isReportPost).toBe(true);
    });

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;

      component.reportpost();

      expect(component.enableAlert).toBe(true);
      expect(component.isReportPost).toBe(false);
    });
  });

  describe('shareOnThread()', () => {
    it('should share post using navigator share', fakeAsync(() => {
      const item = { PostID: '123' };
      component.shareOnThread(item);
      tick();

      expect(component.path).toContain('forum/forum-thread/123');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalled();
    }));

    it('should handle share error', fakeAsync(() => {
      mockNgNavigatorShareService.share.and.returnValue(Promise.reject('Share error'));
      const consoleSpy = spyOn(console, 'log');
      const item = { PostID: '123' };

      component.shareOnThread(item);
      tick();

      expect(consoleSpy).toHaveBeenCalled();
    }));
  });

  describe('report()', () => {
    it('should report post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.commenttext = 'Report text';
      component.isReportPost = true;
      const item = { PostID: '123' };

      component.report(item);
      tick();

      expect(mockForumService.reportPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107',
        Comment: 'Report text'
      });
      expect(component.isReportPost).toBe(false);
    }));

    it('should not report when not logged in', () => {
      component.isLoggedIn = false;
      const item = { PostID: '123' };

      component.report(item);

      expect(mockForumService.reportPost).not.toHaveBeenCalled();
    });
  });

  describe('commentPost()', () => {
    it('should submit comment when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.PostComment = 'Test comment';
      component.posttread.PostID = '123';
      component.isReportPost = true;
      component.isEditComment = true;
      spyOn(component, 'getPostData');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.commentPost();
      tick();

      expect(mockForumService.submitPost).toHaveBeenCalledWith({
        POST: 'Test comment',
        UserId: '107',
        ParentPostID: '123'
      });
      expect(component.isReportPost).toBe(false);
      expect(component.isEditComment).toBe(false);
      expect(component.PostComment).toBe('');
      expect(component.submissionState).toBe('success');
      expect(component.modalText).toBe('Submitted successfully. Your comment will be visible after moderation.');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
      expect(component.getPostData).toHaveBeenCalled();
    }));

    it('should handle error when submitting comment fails', fakeAsync(() => {
      mockForumService.submitPost.and.returnValue(throwError('Error'));
      component.isLoggedIn = true;
      component.userID = '107';
      component.PostComment = 'Test comment';
      component.posttread.PostID = '123';
      spyOn(component, 'openPostedSuccessfullyModal');

      component.commentPost();
      tick();

      expect(component.submissionState).toBe('error');
      expect(component.modalText).toBe('Something went wrong. Please try again');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;

      component.commentPost();

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.submitPost).not.toHaveBeenCalled();
    });
  });

  describe('closePost()', () => {
    it('should close posted successfully modal', () => {
      spyOn(component, 'closePostedSuccessfullyModal');
      component.closePost();
      expect(component.closePostedSuccessfullyModal).toHaveBeenCalled();
    });
  });

  describe('post()', () => {
    it('should submit post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.posttext = 'Test post';
      const item = { userID: '107', ReplyPostID: '456' };
      spyOn(component, 'reploadpage');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.post(item);
      tick();

      expect(mockForumService.submitPost).toHaveBeenCalledWith({
        POST: 'Test post',
        UserId: '107',
        ParentPostID: '456'
      });
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
      expect(component.reploadpage).toHaveBeenCalled();
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = { userID: '107', ReplyPostID: '456' };

      component.post(item);

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.submitPost).not.toHaveBeenCalled();
    });
  });

  describe('gotToProfile()', () => {
    it('should navigate to user profile', () => {
      component.gotToProfile('107');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/forum/profile/', '107']);
    });
  });

  describe('reportComment()', () => {
    it('should report comment when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.commenttext = 'Report comment';
      component.posttread.PostID = '123';
      component.isEditComment = true;
      component.isReportPost = true;
      spyOn(component, 'reploadpage');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.reportComment({});
      tick();

      expect(component.isEditComment).toBe(false);
      expect(component.isReportPost).toBe(false);
      expect(mockForumService.reportPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107',
        Comment: 'Report comment'
      });
      expect(component.commenttext).toBe('');
      expect(component.submissionState).toBe('success');
      expect(component.modalText).toBe('Submitted successfully');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
      expect(component.reploadpage).toHaveBeenCalled();
    }));

    it('should handle error when reporting comment fails', fakeAsync(() => {
      mockForumService.reportPost.and.returnValue(throwError('Error'));
      component.isLoggedIn = true;
      component.userID = '107';
      component.commenttext = 'Report comment';
      component.posttread.PostID = '123';
      spyOn(component, 'openPostedSuccessfullyModal');

      component.reportComment({});
      tick();

      expect(component.submissionState).toBe('error');
      expect(component.modalText).toBe('Something went wrong. Please try again');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;

      component.reportComment({});

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.reportPost).not.toHaveBeenCalled();
    });
  });

  describe('callEditPost()', () => {
    it('should set isEditPost to true', () => {
      component.posttread.isEditPost = false;
      component.callEditPost();
      expect(component.posttread.isEditPost).toBe(true);
    });
  });

  describe('follow()', () => {
    it('should follow post when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.posttread.Followed = '0';
      const item = { PostID: '123' };

      component.follow(item);
      tick();

      expect(mockForumService.followPost).toHaveBeenCalledWith({
        PostID: '123',
        UserID: '107'
      });
      expect(component.posttread.Followed).toBe('1');
    }));

    it('should unfollow post when already following', fakeAsync(() => {
      component.isLoggedIn = true;
      component.posttread.Followed = '1';
      const item = { PostID: '123' };

      component.follow(item);
      tick();

      expect(component.posttread.Followed).toBe('0');
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;
      const item = { PostID: '123' };

      component.follow(item);

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.followPost).not.toHaveBeenCalled();
    });
  });

  describe('getLocalPostDate()', () => {
    it('should call service getLocalPostDate', () => {
      component.getLocalPostDate('2024-01-01');
      expect(mockForumService.getLocalPostDate).toHaveBeenCalledWith('2024-01-01');
    });
  });

  describe('submitComment()', () => {
    it('should submit comment when logged in', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.PostComment = 'Test comment';
      component.list = {
        ParentPost: [{ ParentPostID: '123' }]
      };
      component.posttread.PostID = '123';
      component.isEditComment = true;
      component.isReportPost = true;
      spyOn(component, 'reploadpage');
      spyOn(component, 'openPostedSuccessfullyModal');

      component.submitComment();
      tick();

      expect(mockForumService.submitPost).toHaveBeenCalledWith({
        POST: 'Test comment',
        UserId: '107',
        ParentPostID: 123
      });
      expect(component.submissionState).toBe('success');
      expect(component.modalText).toBe('Submitted successfully. Your comment will be visible after moderation');
      expect(component.isEditComment).toBe(false);
      expect(component.isReportPost).toBe(false);
      expect(component.PostComment).toBe('');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
      expect(component.reploadpage).toHaveBeenCalled();
    }));

    it('should use posttread.PostID when ParentPostID not available', fakeAsync(() => {
      component.isLoggedIn = true;
      component.userID = '107';
      component.PostComment = 'Test comment';
      component.list = {
        ParentPost: [{}]
      };
      component.posttread.PostID = '456';

      component.submitComment();
      tick();

      const callArgs = mockForumService.submitPost.calls.mostRecent().args[0];
      expect(callArgs.ParentPostID).toBe(456);
    }));

    it('should handle error when submitting fails', fakeAsync(() => {
      mockForumService.submitPost.and.returnValue(throwError('Error'));
      component.isLoggedIn = true;
      component.userID = '107';
      component.PostComment = 'Test comment';
      component.list = {
        ParentPost: [{ ParentPostID: '123' }]
      };
      spyOn(component, 'openPostedSuccessfullyModal');

      component.submitComment();
      tick();

      expect(component.submissionState).toBe('error');
      expect(component.modalText).toBe('Something went wrong. Please try again');
      expect(component.openPostedSuccessfullyModal).toHaveBeenCalled();
    }));

    it('should enable alert when not logged in', () => {
      component.isLoggedIn = false;
      component.enableAlert = false;

      component.submitComment();

      expect(component.enableAlert).toBe(true);
      expect(mockForumService.submitPost).not.toHaveBeenCalled();
    });
  });

  describe('openPostedSuccessfullyModal()', () => {
    it('should open modal', () => {
      const event = {} as Event;
      component.openPostedSuccessfullyModal(event);
      expect(mockModalService.openModal).toHaveBeenCalledWith('posted_successfully', event);
    });

    it('should open modal without event', () => {
      component.openPostedSuccessfullyModal();
      expect(mockModalService.openModal).toHaveBeenCalledWith('posted_successfully', undefined);
    });
  });

  describe('closePostedSuccessfullyModal()', () => {
    it('should close modal', () => {
      component.closePostedSuccessfullyModal();
      expect(mockModalService.closeModal).toHaveBeenCalledWith('posted_successfully');
    });
  });

  describe('GetReplyCount()', () => {
    it('should return reply count', () => {
      component.list = {
        ReplyPost: [
          { ReplyPostID: '1' },
          { ReplyPostID: '2' },
          { ReplyPostID: '3' }
        ]
      };
      expect(component.GetReplyCount()).toBe(3);
    });

    it('should return 0 when no replies', () => {
      component.list = { ReplyPost: [] };
      expect(component.GetReplyCount()).toBe(0);
    });
  });

  describe('getTagClass()', () => {
    it('should return correct class for "manage your mental health"', () => {
      expect(component.getTagClass('manage your mental health')).toBe('tag-mental-health');
    });

    it('should return correct class for "relationships"', () => {
      expect(component.getTagClass('relationships')).toBe('tag-relationships');
    });

    it('should return correct class for "work & leadership"', () => {
      expect(component.getTagClass('work & leadership')).toBe('tag-work-leadership');
    });

    it('should return correct class for "work and leadership"', () => {
      expect(component.getTagClass('work and leadership')).toBe('tag-work-leadership');
    });

    it('should return correct class for "be happier"', () => {
      expect(component.getTagClass('be happier')).toBe('tag-be-happier');
    });

    it('should return correct class for "habits & addiction"', () => {
      expect(component.getTagClass('habits & addiction')).toBe('tag-habits-addiction');
    });

    it('should return correct class for "deal with loss"', () => {
      expect(component.getTagClass('deal with loss')).toBe('tag-dealing-loss');
    });

    it('should return correct class for "meditation"', () => {
      expect(component.getTagClass('meditation')).toBe('tag-meditation');
    });

    it('should return correct class for "manage your emotions"', () => {
      expect(component.getTagClass('manage your emotions')).toBe('tag-managing-emotions');
    });

    it('should return correct class for "nuggets of inspiration"', () => {
      expect(component.getTagClass('nuggets of inspiration')).toBe('tag-nuggets-inspiration');
    });

    it('should return correct class for "ask our expert coaches"', () => {
      expect(component.getTagClass('ask our expert coaches')).toBe('tag-ask-coach');
    });

    it('should return correct class for "other"', () => {
      expect(component.getTagClass('other')).toBe('tag-other');
    });

    it('should return empty string for unknown tag', () => {
      expect(component.getTagClass('unknown tag')).toBe('');
    });

    it('should handle empty string', () => {
      expect(component.getTagClass('')).toBe('');
    });

    it('should handle null/undefined', () => {
      expect(component.getTagClass(null as any)).toBe('');
      expect(component.getTagClass(undefined as any)).toBe('');
    });

    it('should handle case insensitive matching', () => {
      expect(component.getTagClass('MANAGE YOUR MENTAL HEALTH')).toBe('tag-mental-health');
      expect(component.getTagClass('RELATIONSHIPS')).toBe('tag-relationships');
    });

    it('should trim whitespace', () => {
      expect(component.getTagClass('  relationships  ')).toBe('tag-relationships');
    });
  });
});

