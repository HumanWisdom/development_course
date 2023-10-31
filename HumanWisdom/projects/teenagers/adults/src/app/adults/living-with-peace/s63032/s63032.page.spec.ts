import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63032Page } from './s63032.page';

describe('S63032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63032Page;
  let fixture: ComponentFixture<S63032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
