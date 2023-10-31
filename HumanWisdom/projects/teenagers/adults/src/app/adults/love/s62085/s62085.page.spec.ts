import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62085Page } from './s62085.page';

describe('S62085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62085Page;
  let fixture: ComponentFixture<S62085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
