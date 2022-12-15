import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46031tPage } from './s46031t.page';

describe('S46031tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46031tPage;
  let fixture: ComponentFixture<S46031tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46031tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46031tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
