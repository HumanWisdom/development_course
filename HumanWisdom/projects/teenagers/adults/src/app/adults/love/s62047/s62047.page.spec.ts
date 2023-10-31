import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62047Page } from './s62047.page';

describe('S62047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62047Page;
  let fixture: ComponentFixture<S62047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
