import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132190tPage } from './s132190t.page';

describe('S132190tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132190tPage;
  let fixture: ComponentFixture<S132190tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132190tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132190tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
