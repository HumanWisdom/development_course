import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46064tPage } from './s46064t.page';

describe('S46064tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46064tPage;
  let fixture: ComponentFixture<S46064tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46064tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46064tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
