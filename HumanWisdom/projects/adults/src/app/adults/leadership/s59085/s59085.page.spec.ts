import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59085Page } from './s59085.page';

describe('S59085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59085Page;
  let fixture: ComponentFixture<S59085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
