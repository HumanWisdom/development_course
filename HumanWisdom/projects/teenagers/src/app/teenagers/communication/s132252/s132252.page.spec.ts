import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132252Page } from './s132252.page';

describe('S132252Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132252Page;
  let fixture: ComponentFixture<S132252Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132252Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132252Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
