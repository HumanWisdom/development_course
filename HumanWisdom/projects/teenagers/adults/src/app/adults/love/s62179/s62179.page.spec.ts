import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62179Page } from './s62179.page';

describe('S62179Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62179Page;
  let fixture: ComponentFixture<S62179Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62179Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62179Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
