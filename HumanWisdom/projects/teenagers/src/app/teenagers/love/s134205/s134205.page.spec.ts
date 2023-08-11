import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134205Page } from './s134205.page';

describe('S134205Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134205Page;
  let fixture: ComponentFixture<S134205Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134205Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134205Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
