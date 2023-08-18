import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134068Page } from './s134068.page';

describe('S134068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134068Page;
  let fixture: ComponentFixture<S134068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
