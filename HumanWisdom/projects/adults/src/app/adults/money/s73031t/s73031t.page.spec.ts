import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73031tPage } from './s73031t.page';

describe('S73031tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73031tPage;
  let fixture: ComponentFixture<S73031tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73031tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73031tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
