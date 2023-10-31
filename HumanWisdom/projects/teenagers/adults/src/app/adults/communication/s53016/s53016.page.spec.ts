import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53016Page } from './s53016.page';

describe('S53016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53016Page;
  let fixture: ComponentFixture<S53016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
