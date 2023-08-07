import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134167Page } from './s134167.page';

describe('S134167Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134167Page;
  let fixture: ComponentFixture<S134167Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134167Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134167Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
