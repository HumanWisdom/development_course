import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45084Page } from './s45084.page';

describe('S45084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45084Page;
  let fixture: ComponentFixture<S45084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
