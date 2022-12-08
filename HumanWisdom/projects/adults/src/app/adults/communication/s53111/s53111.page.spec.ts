import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53111Page } from './s53111.page';

describe('S53111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53111Page;
  let fixture: ComponentFixture<S53111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
