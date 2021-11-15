import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53155Page } from './s53155.page';

describe('S53155Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53155Page;
  let fixture: ComponentFixture<S53155Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53155Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53155Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
