import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59099tPage } from './s59099t.page';

describe('S59099tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59099tPage;
  let fixture: ComponentFixture<S59099tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59099tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59099tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
