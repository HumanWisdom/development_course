import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134050Page } from './s134050.page';

describe('S134050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134050Page;
  let fixture: ComponentFixture<S134050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
