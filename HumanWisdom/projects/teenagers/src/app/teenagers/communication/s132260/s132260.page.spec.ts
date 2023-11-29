import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132260Page } from './s132260.page';

describe('S132260Page', () => {
  // let   
    let component:  S132260Page;
  let fixture: ComponentFixture<S132260Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132260Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132260Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
