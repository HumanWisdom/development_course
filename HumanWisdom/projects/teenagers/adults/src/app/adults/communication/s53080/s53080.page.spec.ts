import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53080Page } from './s53080.page';

describe('S53080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53080Page;
  let fixture: ComponentFixture<S53080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
