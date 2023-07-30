import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134074Page } from './s134074.page';

describe('S134074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134074Page;
  let fixture: ComponentFixture<S134074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
