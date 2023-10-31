import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53009Page } from './s53009.page';

describe('S53009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53009Page;
  let fixture: ComponentFixture<S53009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
