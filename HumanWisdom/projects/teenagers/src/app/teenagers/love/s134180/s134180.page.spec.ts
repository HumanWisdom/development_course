import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134180Page } from './s134180.page';

describe('S134180Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134180Page;
  let fixture: ComponentFixture<S134180Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134180Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134180Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
