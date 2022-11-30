import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64058tPage } from './s64058t.page';

describe('S64058tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64058tPage;
  let fixture: ComponentFixture<S64058tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64058tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64058tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
