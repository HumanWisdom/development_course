import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134177Page } from './s134177.page';

describe('S134177Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134177Page;
  let fixture: ComponentFixture<S134177Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134177Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134177Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
