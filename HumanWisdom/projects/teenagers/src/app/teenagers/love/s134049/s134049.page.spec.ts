import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134049Page } from './s134049.page';

describe('S134049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134049Page;
  let fixture: ComponentFixture<S134049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
