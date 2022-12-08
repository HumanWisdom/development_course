import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53227Page } from './s53227.page';

describe('S53227Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53227Page;
  let fixture: ComponentFixture<S53227Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53227Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53227Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
