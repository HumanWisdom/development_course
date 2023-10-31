import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62186Page } from './s62186.page';

describe('S62186Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62186Page;
  let fixture: ComponentFixture<S62186Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62186Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62186Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
