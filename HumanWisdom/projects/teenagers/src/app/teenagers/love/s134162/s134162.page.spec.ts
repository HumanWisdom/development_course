import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134162Page } from './s134162.page';

describe('S134162Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134162Page;
  let fixture: ComponentFixture<S134162Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134162Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134162Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
