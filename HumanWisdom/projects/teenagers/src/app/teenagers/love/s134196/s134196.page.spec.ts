import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134196Page } from './s134196.page';

describe('S134196Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134196Page;
  let fixture: ComponentFixture<S134196Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134196Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134196Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
