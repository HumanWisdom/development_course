import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134075Page } from './s134075.page';

describe('S134075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134075Page;
  let fixture: ComponentFixture<S134075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
