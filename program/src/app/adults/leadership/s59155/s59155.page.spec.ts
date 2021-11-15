import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59155Page } from './s59155.page';

describe('S59155Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59155Page;
  let fixture: ComponentFixture<S59155Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59155Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59155Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
