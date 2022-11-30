import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59092Page } from './s59092.page';

describe('S59092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59092Page;
  let fixture: ComponentFixture<S59092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
