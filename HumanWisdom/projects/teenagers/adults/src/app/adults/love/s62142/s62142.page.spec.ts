import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62142Page } from './s62142.page';

describe('S62142Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62142Page;
  let fixture: ComponentFixture<S62142Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62142Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62142Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
