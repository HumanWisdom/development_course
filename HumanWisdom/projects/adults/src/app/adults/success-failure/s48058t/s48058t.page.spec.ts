import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48058tPage } from './s48058t.page';

describe('S48058tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48058tPage;
  let fixture: ComponentFixture<S48058tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48058tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48058tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
